import React from "react";
import {  Card, CardHeader, CardBody } from "reactstrap";
import { Feature } from "../../core/feature";

export interface FeatureBoxProps {
  data: Feature;
}

export const FeaturePicture: React.FC<FeatureBoxProps> = ({ data }) => {
  return (
    <Card className="border border-light shadow-none mt-5 mt-lg-0">
      <CardHeader className="border-0 bg-transparent">
        <div>
          <i className="mdi mdi-circle text-danger mr-1"></i>
          <i className="mdi mdi-circle text-warning mr-1 ml-1"></i>
          <i className="mdi mdi-circle text-success mr-1 ml-1"></i>
        </div>
      </CardHeader>
      <CardBody className="bg-light">
        <div className="box-shadow">
          <img
            src={data.image}
            alt={data.title}
            className="img-fluid mx-auto d-block"
          />
        </div>
      </CardBody>
    </Card>
  );
};
