import React, { useEffect, useState } from "react";
import {
  BlockLandingData,
} from "../../core/block";
import {FeatureBlock} from "./FeaturesBlock";


// Render Block from json
export const FeaturesBlockLanding: React.FC<BlockLandingData> = ({
  json,
}) => {
  const data = JSON.parse(json);
  return <FeatureBlock data={data} />;
};
