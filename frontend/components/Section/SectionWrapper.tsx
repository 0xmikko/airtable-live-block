import React from "react";
import { Row, Col, Container } from "reactstrap";
import {Block, getSectionId} from "../../core/block";

export interface SectionWrapperProps {
  data: Block;
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({
  data,
  children,
}) => {
  return (
    <section className="section bg-light" id={getSectionId(data)}>
      <Container>
        <Row className="justify-content-center">
          <Col lg={8}>
            <div className="text-center mb-5">
              <h5 className="text-primary text-uppercase small-title">
                {data.subtitle}
              </h5>
              <h4 className="mb-3">{data.title}</h4>
              <p>{data.desc}</p>
            </div>
          </Col>
        </Row>

        {children}
      </Container>
    </section>
  );
};
