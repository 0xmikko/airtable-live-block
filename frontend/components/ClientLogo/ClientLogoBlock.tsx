import React, { Component, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import { SectionWrapper } from "../Section/SectionWrapper";
import { Section } from "../../core/section";
import { ClientLogo } from "../../core/clientLogo";

export interface ClientBlockProps {
  data: ClientLogo[];
}

export const ClientLogoBlock: React.FC<ClientBlockProps> = ({
  data,
}) => {
  return (
      <Row className="mt-5">
        {data.map((client, key) => (
          <Col xl={3} sm={6} key={key}>
            <div className="client-images">
              <img
                src={client.image}
                alt="client-img"
                className="mx-auto img-fluid d-block"
              />
            </div>
          </Col>
        ))}
      </Row>
  );
};
