import React from "react";
import { Row, Col } from "reactstrap";
import { Service } from "../../core/service";

export interface ServiceBlockProps {
  data: Service[];
}

export const ServiceBlock: React.FC<ServiceBlockProps> = ({ data }) => {
  return (
    <Row>
      {data.map((service, key) => (
        <Col xl={4} sm={6} key={key}>
          <div className="text-center p-4 mt-3">
            <div className="avatar-md mx-auto mb-4">
              <img src={service.image} height={32} width={32} alt={service.title}/>
            </div>
            <h5 className="font-18">{service.title}</h5>
            <p className="mb-0">{service.desc}</p>
          </div>
        </Col>
      ))}
    </Row>
  );
};
