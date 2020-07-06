import React, { useEffect, useState } from "react";
import {
  BlockLandingData,
} from "../../core/block";
import CounterBlock from "./CounterBlock";


// Render Block from json
export const CounterBlockLanding: React.FC<BlockLandingData> = ({
  json,
}) => {
  const data = JSON.parse(json);
  return <CounterBlock data={data} />;
};
