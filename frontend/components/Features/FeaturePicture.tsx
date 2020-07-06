import React  from "react";
import {Card, CardHeader, CardBody, Col, Row} from "reactstrap";
import { Feature } from "../../core/feature";

export interface FeatureBoxProps {
  data: Feature;
  index: number;
}

export const FeaturePicture: React.FC<FeatureBoxProps> = ({ data, index }) => {
  return (
      <Col lg={7} sm={8}>
          <div style={{display: 'flex', flexDirection: 'row', justifyContent: index % 2 === 0 ? 'flex-end' : 'flex-start'}}>
          <img
            src={data.image}
            alt={data.title}
            className="img-fluid d-block"
          />
          </div>
      </Col>
  );
};
