import React, { useEffect, useState } from "react";
import {
  BlockLandingData,
} from "../../core/block";
import { ClientLogoBlock } from "./ClientLogoBlock";


// Render Block from json
export const ClientLogoBlockLanding: React.FC<BlockLandingData> = ({
  json,
}) => {
  const data = JSON.parse(json);
  return <ClientLogoBlock data={data} />;
};
