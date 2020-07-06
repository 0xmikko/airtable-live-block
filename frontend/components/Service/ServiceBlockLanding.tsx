import React, { useEffect, useState } from "react";
import {
  BlockLandingData,
} from "../../core/block";
import {ServiceBlock} from "./ServiceBlock";


// Render Block from json
export const ServiceBlockLanding: React.FC<BlockLandingData> = ({
  json,
}) => {
  const data = JSON.parse(json);
  return <ServiceBlock data={data} />;
};
