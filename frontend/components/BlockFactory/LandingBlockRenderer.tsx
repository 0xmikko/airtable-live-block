import React from "react";
import { BlockRendererProps } from "./BlockFactory";
import { BlockTableData, LandingsBlocks } from "../../core/block";
import { SectionWrapper } from "../Section/SectionWrapper";

export const LandingBlockRenderer: React.FC<BlockRendererProps> = ({
  block,
  records,
  matcher,
}) => {
  const renderedBlock = React.createElement<BlockTableData>(
    LandingsBlocks[block.type].blockTable,
    {
      records,
      matcher,
    }
  );

  return LandingsBlocks[block.type].renderInSection ? (
    <SectionWrapper data={block}>{renderedBlock}</SectionWrapper>
  ) : (
    renderedBlock
  );
};
