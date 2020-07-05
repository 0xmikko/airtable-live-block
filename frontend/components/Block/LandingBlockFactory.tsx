import React from "react";
import { Block, LandingsBlocks } from "../../core/block";
import { SectionWrapper } from "../Section/SectionWrapper";

export interface BlockLandingProps {
  data: Block[];
}

export const LandingBlockFactory: React.FC<BlockLandingProps> = ({ data }) => {
  const renderedBlocks = data
    .filter((block) => LandingsBlocks[block.type] !== undefined)
    .map((block) => {
      const renderedBlock = React.createElement<Block>(
        LandingsBlocks[block.type].blockTable,
        block
      );
      return LandingsBlocks[block.type].renderInSection ? (
        <SectionWrapper data={block}>{renderedBlock}</SectionWrapper>
      ) : (
        renderedBlock
      );
    });

  return <>{renderedBlocks}</>;
};
