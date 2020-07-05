import React, { Component } from 'react';
import { Container, Row, Col } from "reactstrap";

export class FooterLinks extends Component {
    render() {
        return (
            <React.Fragment>
        <section className="bg-primary py-3">
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className="float-sm-left">
                            <a href="#">
                                <img src={"https://storage.googleapis.com/airtable-live/logo-light.png"} alt="" height="20"/>
                            </a>
                        </div>
                        <div className="float-sm-right mt-4 mt-sm-0">
                            <p className="copyright-desc text-white mb-0">{new Date().getFullYear()} AirTableLive</p>
                        </div>
                    </Col>
                </Row>

            </Container>

        </section>
            </React.Fragment>
        );
    }
}

