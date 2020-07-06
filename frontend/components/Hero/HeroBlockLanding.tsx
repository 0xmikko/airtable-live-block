import React, { useEffect, useState } from "react";
import { BlockLandingData } from "../../core/block";
import {HeroBlock} from "./HeroBlock";

// Render Block from json
export const HeroBlockLanding: React.FC<BlockLandingData> = ({ json }) => {
  const data = JSON.parse(json);
  return <HeroBlock data={data[0]} />;
};
