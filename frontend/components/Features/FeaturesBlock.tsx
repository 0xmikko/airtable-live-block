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
      {" "}
      {data.map((f, index) => (
        <Row>
          <Col lg={5}>
            <div>
              {index % 2 === 0 ? (
                <FeatureBox data={f} />
              ) : (
                <FeaturePicture data={f} />
              )}
            </div>
          </Col>

          <Col lg={5} sm={8} className="ml-lg-auto">
            {index % 2 !== 0 ? (
              <FeatureBox data={f} />
            ) : (
              <FeaturePicture data={f} />
            )}
          </Col>
        </Row>
      ))}
    </>
  );
};
