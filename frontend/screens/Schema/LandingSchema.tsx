import React, {useState} from "react";
import { Block } from "../../core/block";
import {Button, useBase, useRecords} from "@airtable/blocks/ui";
import {LandingSchemaItem} from "../../containers/LandingSchemaItem";
import {Col, Container, Row} from "reactstrap";

export const LandingSchema: React.FC = () => {
  const base = useBase();
  const table = base.getTableByNameIfExists("Schema");

  const view = table.getViewByName('Grid view');
  const queryResult = view.selectRecords();
  const records = useRecords(queryResult);

  const blocks = records
    .filter((r) => r !== null)
    .map((record) => new Block(record));

  return (
      <Container>
        <Row style={{ marginTop: "30px", marginBottom: "20px" }}>
          <Col lg={12} md={12} xs={12} style={{ textAlign: "center" }}>
            <h3>Landing structure</h3>
          </Col>
        </Row>
        <Row>
          <Col lg={12} md={12} sm={12}>
      { blocks.map(block => <LandingSchemaItem data={block}  />)}
          </Col>
        </Row>
      </Container>
  );
};
