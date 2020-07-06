import React from "react";
import { Container, Row, Col, Media } from "reactstrap";
import FeatherIcon from "feather-icons-react";
import { FooterCopy } from "./FooterCopy";
import { Footer } from "../../core/footer";

export interface FooterBlockProps {
  data: Footer;
}

export const FooterBlock: React.FC<FooterBlockProps> = ({ data }) => {
  return (
    <React.Fragment>
      <footer className="footer">
        <Container>
          <Row>
            <Col lg={6} sm={6}>
              <div>
                <h5 className="mb-4 footer-list-title">About</h5>
                <p>{data.about}</p>
              </div>
            </Col>

            <Col lg={6} sm={6}>
              <div>
                <h5 className="mb-4 footer-list-title">Contact</h5>

                <div>
                  <Media>
                    <i>
                      <FeatherIcon
                        icon="map-pin"
                        className="icon-dual-light icons-sm mt-1 mr-2"
                      />
                    </i>
                    <Media body>
                      <p>{data.address}</p>
                    </Media>
                  </Media>
                  <Media>
                    <i>
                      <FeatherIcon
                        icon="mail"
                        className="icon-dual-light icons-sm mt-1 mr-2"
                      />
                    </i>
                    <Media body>
                      <p>{data.email}</p>
                    </Media>
                  </Media>
                  <Media>
                    <i>
                      <FeatherIcon
                        icon="phone"
                        className="icon-dual-light icons-sm mt-1 mr-2"
                      />
                    </i>
                    <Media body>
                      <p>{data.phone}</p>
                    </Media>
                  </Media>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
      {/* Render footer links */}
      <FooterCopy />
    </React.Fragment>
  );
};
