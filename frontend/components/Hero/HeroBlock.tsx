import React from "react";
import { Container, Row, Col } from "reactstrap";
import {Hero} from "../../core/hero";

interface HeroBlockProps {
  data: Hero
}

export const HeroBlock: React.FC<HeroBlockProps> = ({data}) => {

  return (
    <section
      className="hero-section-5"
      id="home"
      style={{ background: `url(${data.image})` }}
    >
      <div className="bg-overlay"></div>
      <Container>
        <Row className="justify-content-center">
          <Col lg={8}>
            <div className="hero-wrapper text-center mb-4">
              <p className="font-16 text-uppercase text-white-50">
                {data.subtitle}
              </p>
              <h1 className="hero-title text-white mb-4">{data.title}</h1>

              <p className="text-white-50">{data.desc}</p>

              {/*<div className="mt-4">*/}
              {/*  <a href="#" className="btn btn-primary mt-2 mr-2">*/}
              {/*    Get Started*/}
              {/*  </a>*/}
              {/*  <a href="#" className="btn btn-success mt-2 mr-2 ml-1">*/}
              {/*    Learn more*/}
              {/*  </a>*/}
              {/*</div>*/}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
