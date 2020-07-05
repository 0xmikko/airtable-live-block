import React from "react";
import { Col, Container, Row } from "reactstrap";
import { CounterBox } from "./Counter";
import { Counter } from "../../core/counter";

export interface CounterBlockProps {
  data: Counter[];
}

export const CounterBlock: React.FC<CounterBlockProps> = ({ data }) => {
  return (
    <section className="section bg-primary">
      <Container>
        <Row className="justify-content-center mb-5">
          <Col lg={7}>
            <div className="text-center text-white-50">
              <h4 className="text-white">Best Solutions for your Business</h4>
              <p>
                To achieve this, it would be necessary to have uniform grammar,
                pronunciation and more common that of the individual languages.
              </p>
            </div>
          </Col>
        </Row>

        <Row id="counter">
          <CounterBox data={data} />
        </Row>
      </Container>
    </section>
  );
};

export default CounterBlock;
