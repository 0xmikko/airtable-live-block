import React from "react";
import { Feature } from "../../core/feature";

export interface FeatureBoxProps {
  data: Feature;
}

export const FeatureBox: React.FC<FeatureBoxProps> = ({ data }) => {
  return (
    <>
      <h5>{data.title}</h5>
      <p className="mb-4">{data.desc}</p>

    </>
  );
};
