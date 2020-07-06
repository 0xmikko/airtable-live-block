import React from "react";
import { Block, BlockTableData, LandingsBlocks } from "../../core/block";
import { SectionWrapper } from "../Section/SectionWrapper";
import { IncorrectBlockRendererProps } from "./BlockFactory";
import {BlockInfo} from "../BlockInfo";

export const LandingIncorrectBlockRenderer: React.FC<IncorrectBlockRendererProps> = ({
  block,
  message,
}) => {
  const renderedBlock =  <BlockInfo type={block.type}><div style={{color: "red"}}>{message}</div></BlockInfo>

  return LandingsBlocks[block.type].renderInSection ? (
    <SectionWrapper data={block}>{renderedBlock}</SectionWrapper>
  ) : (
    renderedBlock
  );
};
