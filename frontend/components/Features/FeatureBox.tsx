import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import FeatherIcon from "feather-icons-react";
import {Feature} from "../../core/feature";

export interface FeatureBoxProps {
   data: Feature;
}

export const FeatureBox: React.FC<FeatureBoxProps> = ({
    data
}) => {
  return (
    <React.Fragment>
      <div className="avatar-md mb-4">
        <span className="avatar-title rounded-circle bg-soft-primary">
          <i>
            <FeatherIcon icon={data.icon} className="icon-dual-primary" />
          </i>
        </span>
      </div>
      <h5>{data.title}</h5>
      <p className="mb-4">{data.desc}</p>

      <Row>
        {data.smallFeatures.map((sFeature, key) => (
          <Col sm={6} key={key}>
            <p>
              <i>
                <FeatherIcon icon="check" className="icon-dual-success mr-2" />
              </i>{" "}
              {sFeature.title}
            </p>
          </Col>
        ))}
      </Row>


    </React.Fragment>
  );
};
