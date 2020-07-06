import React from "react";
import { Feature } from "../../core/feature";
import { Col } from "reactstrap";

export interface FeatureBoxProps {
  data: Feature;
}

export const FeatureBox: React.FC<FeatureBoxProps> = ({ data }) => {
  return (
    <Col lg={5}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "flex-start",
          alignItems: "flex-start",
          height: "100%",
        }}
      >
        <h5>{data.title}</h5>
        <p className="mb-4">
          {data.desc.split("\n").map((e) => (
            <>
              {e}
              <br />
            </>
          ))}
        </p>
      </div>
    </Col>
  );
};
