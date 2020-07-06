import React, { useEffect, useState } from "react";
import { BlockLandingData } from "../../core/block";
import { FooterBlock } from "./FooterBlock";

// Render Block from json
export const FooterBlockLanding: React.FC<BlockLandingData> = ({ json }) => {
  const data = JSON.parse(json);
  return <FooterBlock data={data[0]} />;
};
