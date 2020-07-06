import React, { useEffect, useState } from "react";
import { Block } from "../../core/block";
import { Button, Input, useBase, useRecords } from "@airtable/blocks/ui";
import { PublishBlockFactory } from "../../components/BlockFactory/PublishBlockFactory";
import { Col, Container, Row } from "reactstrap";

export const PublishScreen: React.FC = () => {
  const base = useBase();
  const table = base.getTableByNameIfExists("Schema");

  const [startUpload, setStartUpload] = useState(false);

  const view = table.getViewByName("Grid view");
  const queryResult = view.selectRecords();
  const records = useRecords(queryResult);

  const [bundleName, setBundleName] = useState("landing");

  const blocks = records
    .filter((r) => r !== null)
    .map((record) => new Block(record));

  return (
    <Container>
      <Row style={{ marginTop: "30px", marginBottom: "20px" }}>
        <Col lg={12} md={12} xs={12} style={{ textAlign: "center" }}>
          <h3>Publisher</h3>
          <Input
            value={bundleName}
            onChange={(e) => setBundleName(e.target.value)}
            placeholder="Bundle name"
            width="80%"
            style={{marginTop: '10px', marginBottom: '10px'}}
          />
          <Button width={'80%'} variant={'primary'} onClick={() => setStartUpload(true)}>Start upload</Button><br/>
          <a href={`https://airtable.live/${bundleName}`} target={"_blank"} style={{marginTop: '10px'}}>Open landing</a>
        </Col>
      </Row>
      <Row>
        <Col lg={12} md={12} sm={12}>
          <PublishBlockFactory
            data={blocks}
            bundleName={bundleName}
            startUpload={startUpload}
          />
        </Col>
      </Row>
    </Container>
  );
};
