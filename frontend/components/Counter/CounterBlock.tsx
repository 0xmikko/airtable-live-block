import React from "react";
import { Col, Container, Row } from "reactstrap";
import CountUp from "react-countup";
import { Counter } from "../../core/counter";

export interface CounterBlockProps {
  data: Counter[];
}

export const CounterBlock: React.FC<CounterBlockProps> = ({ data }) => {
  return (
    <section className="section bg-primary">
      <Container>
        <Row id="counter">
          {data.map((counter, key) => (
            <Col xl={3} sm={6} key={key}>
              <div className="text-center mt-4">
                <img src={counter.image} />
                <h2 className="counter-value text-white mt-4">
                  <CountUp
                    start={counter.start}
                    end={counter.end}
                    duration={10}
                  />
                </h2>
                <p className="font-16 text-white-50">{counter.title}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default CounterBlock;
