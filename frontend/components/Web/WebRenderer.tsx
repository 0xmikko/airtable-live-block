import React from "react";
import { Webpage } from "../../core/webpage";
import { DataScreenComponentProps } from "../DataLoader/DataScreen";
import {LandingsBlocks} from "../../core/block";
import {NavbarPage} from "../Navbar/Navbar";

export interface WebRendererProps extends DataScreenComponentProps<Webpage> {}

export const WebRenderer: React.FC<WebRendererProps> = ({ data }) => {
  console.log("KOOOLA", data);

  const blocks = data.blocks.sort((a,b) => (a.index > b.index ? 1: -1)).map(block => ({
    index: block.index,
    block: JSON.parse(block.content)
  }))



  const realBlocks = blocks.map(b=> b.block.block);
  console.log("KKOLA", realBlocks);
  // @ts-ignore
  const renderedBlocks = blocks.map(b => LandingsBlocks[b.block.block.type].blockLanding({json: JSON.stringify(b.block.data) }));
  return <div>
    <NavbarPage data={realBlocks} />
    {renderedBlocks}
  </div>;
};
