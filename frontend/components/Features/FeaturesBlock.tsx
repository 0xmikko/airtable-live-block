import React from "react";
import { Feature } from "../../core/feature";
import { Col, Row } from "reactstrap";
import { FeatureBox } from "./FeatureBox";
import { FeaturePicture } from "./FeaturePicture";

export interface FeaturesBlockProps {
  data: Feature[];
}

export const FeatureBlock: React.FC<FeaturesBlockProps> = ({ data }) => {
  return (
    <>
      {data.map((f, index) =>
        index % 2 === 0 ? (
          <Row style={{marginBottom: '20px'}}>
            <FeatureBox data={f} />
            <FeaturePicture data={f} index={index}/>
          </Row>
        ) : (
            <Row style={{marginBottom: '20px'}}>
            <FeaturePicture data={f} index={index}/>
            <FeatureBox data={f} />
          </Row>
        )
      )}
    </>
  );
};
