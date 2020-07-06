import React from "react";
import { BlockTableData } from "../../core/block";
import { Col, Container, Row } from "reactstrap";

interface NullBlockTableProps extends BlockTableData {
  title: string;
}

export const NullBlockTable: React.FC<NullBlockTableProps> = ({ title }) => {
  return (
    <Container>
      <Row>
        <Col lg={12}>Unknown type: {title}</Col>
      </Row>
    </Container>
  );
};
