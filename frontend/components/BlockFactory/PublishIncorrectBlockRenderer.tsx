import React from "react";
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
