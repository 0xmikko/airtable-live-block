import React, { useEffect, useState } from "react";
import { useDispatch} from 'react-redux';
import {Button, FieldPicker, TablePicker, TextButton, useBase} from "@airtable/blocks/ui";
import { Table, FieldType, Field } from "@airtable/blocks/models";
import { BlockType, LandingsBlocks } from "../../core/block";
import { RecordMatcher } from "../../core/recordExtractor";
import { globalConfig } from "@airtable/blocks";
import { Col, Container, Row } from "reactstrap";
import actions from "../../store/actions";

interface SchemaEditorProps {
  id: string;
  type: BlockType;
}

export const SchemaEditor: React.FC<SchemaEditorProps> = ({ id, type }) => {
  const schema = LandingsBlocks[type].schema;
  const existingMatcherString = globalConfig.get(`MATCHER${id}`);
  const existingMatcher =
    existingMatcherString === undefined
      ? undefined
      : JSON.parse(existingMatcherString as string);

  const base = useBase();
  const dispatch = useDispatch();

  const [table, setTable] = useState<Table | null>(
    base.getTableByIdIfExists(existingMatcher?.tableId)
  );

  const [fields, setFields] = useState<Record<string, Field>>({});

  useEffect(() => {
    const initialFields: Record<string, Field> = {};
    if (existingMatcher === undefined) return;
    Object.keys(schema).forEach(
      (e) =>
        (initialFields[e] = table.getFieldById(existingMatcher.fieldIds[e]))
    );
    setFields(initialFields);
  }, [schema]);

  if (schema === undefined) return <div>Cant find schema {type}</div>;

  const setField = (key: string, value: Field) => {
    const newFields = { ...fields };
    newFields[key] = value;
    setFields(newFields);
  };

  const fieldsRendered = Object.entries(schema).map((e) => (
    <Row style={{ marginTop: "15px" }}>
      <Col lg={6} md={6} xs={6} sm={6}>
        {e[1].displayName}:
      </Col>
      <Col lg={6} md={6} xs={6} sm={6}>
        <FieldPicker
          table={table}
          onChange={(newField) => setField(e[0], newField)}
          field={fields[e[0]]}
          allowedTypes={[e[1].type]}
        />
      </Col>
    </Row>
  ));

  const submitDisabled =
    Object.keys(schema)
      .map((e) => fields[e])
      .filter((e) => e === undefined).length > 0 ||
    !globalConfig.hasPermissionToSet(`MATCHER${id}`);

  const goToMainSchema = () => {
    dispatch(actions.router.navigate({url: '/schema'}))
  }

  const saveSchema = async () => {
    const fieldIds: Record<string, string> = {};

    Object.keys(schema).forEach((f) => (fieldIds[f] = fields[f].id));

    const newRecordManager: RecordMatcher = {
      tableId: table.id,
      fieldIds,
    };

    console.log(newRecordManager);
    await globalConfig.setAsync(
      `MATCHER${id}`,
      JSON.stringify(newRecordManager)
    );
    goToMainSchema();
  };


  const createTable = async () => {
    let tableName = type.toString();
    let index = 1;
    while(base.getTableIfExists(tableName) !== null) {
      tableName = `${type}-${index}`;
      index++;
    }
    const fieldsArray = Object.values(schema).map(e => ({ name: e.displayName, type: e.type}))
    const newTable = await base.unstable_createTableAsync(tableName, fieldsArray);
    setTable(newTable);

  }
  return (
    <Container>
      <Row style={{ marginTop: "30px", marginBottom: "20px" }}>
        <Col lg={12} md={12} xs={12} style={{ textAlign: "center" }}>
          <h3>Schema Editor: {type}</h3>
        </Col>
      </Row>
      <Row>
        <Col lg={10} md={10} xs={10}>
          <TablePicker
            table={table}
            onChange={(newTable) => setTable(newTable)}
            size="large"
            width={"100%"}
            style={{ marginTop: "10px" }}
          />
        </Col>
        <Col lg={2} md={2} xs={2}>
          <Button width={'100%'} onClick={createTable}>Create</Button>
        </Col>
      </Row>

      {fieldsRendered}
      <Row style={{ marginTop: "30px", marginBottom: "20px" }}>
        <Col lg={12} md={12} xs={12} style={{ textAlign: "center" }}>
          <Button
            variant={"primary"}
            width={"100%"}
            disabled={submitDisabled}
            onClick={saveSchema}
          >
            Save schema
          </Button>
          <Button
              variant={"secondary"}
              width={"100%"}
              disabled={submitDisabled}
              onClick={goToMainSchema}
          >
            Cancel
          </Button>
        </Col>
      </Row>
    </Container>
  );
};
