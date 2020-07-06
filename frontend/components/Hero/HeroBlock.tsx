import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Hero } from "../../core/hero";

interface HeroBlockProps {
  data: Hero;
}

export const HeroBlock: React.FC<HeroBlockProps> = ({ data }) => {
  return (
      <section
          className="hero-section-2"
          id="home"
          style={{
            backgroundImage: `url(${data.image})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right",
          }}
      >
        <Container>
          <Row className="justify-content-center">
            <Col lg={12}>
              <div className="hero-wrapper text-center mb-4">
                <p className="font-16 text-uppercase text-black-50 text-left" >
                  {data.subtitle}
                </p>
                <h1
                    className="hero-title text-black mb-4 text-left"
                    style={{ fontSize: "40pt" }}
                >
                  {data.title.split("\n").map(e => <>{e}<br/></>)}
                </h1>

                <p className="text-black-50 text-left" style={{paddingBottom: '40px'}}>{data.desc.split("\n").map(e => <>{e}<br/></>)}</p>

              </div>
            </Col>
          </Row>
        </Container>
      </section>
  );
};
