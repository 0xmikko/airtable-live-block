import React from "react";
import {Block} from "../../core/block";
import {Col, Container, Row} from "reactstrap";

export const NullBlockTable : React.FC<Block> = ({title}) => {
    return <Container>
        <Row>
            <Col lg={12}>
                Unknown type: {title}
            </Col>
        </Row>
    </Container>
}
