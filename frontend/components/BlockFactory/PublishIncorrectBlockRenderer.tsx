import React from "react";
import { Block, BlockTableData, LandingsBlocks } from "../../core/block";
import { SectionWrapper } from "../Section/SectionWrapper";
import { IncorrectBlockRendererProps } from "./BlockFactory";
import { BlockInfo } from "../BlockInfo";

export const PublishIncorrectBlockRenderer: React.FC<IncorrectBlockRendererProps> = ({
  block,
  message,
}) => {
  return (
    <BlockInfo type={block.type}>
      <div style={{ color: "red" }}>{message}</div>
    </BlockInfo>
  );
};
