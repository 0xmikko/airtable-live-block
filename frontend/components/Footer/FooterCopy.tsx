import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

export class FooterCopy extends Component {
  render() {
    return (
      <section className="bg-primary py-3">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="float-sm-left">
                <a href="#">
                  <img
                    src={
                      "https://storage.googleapis.com/airtable-live/logo-light.png"
                    }
                    alt=""
                    height="20"
                  />
                </a>
              </div>
              <div className="float-sm-right mt-4 mt-sm-0">
                <p className="copyright-desc text-white mb-0">
                  Created by <a href={"https://airtable.live/"} >AirTable Live</a>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}
