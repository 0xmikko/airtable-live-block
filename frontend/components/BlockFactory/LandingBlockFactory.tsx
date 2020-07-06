import React from "react";
import { Block } from "../../core/block";
import { BlockFactory } from "./BlockFactory";
import { LandingBlockRenderer } from "./LandingBlockRenderer";
import { LandingIncorrectBlockRenderer } from "./LandingIncorrectBlockRenderer";

export interface LandingBlockFactoryProps {
  data: Block[];
}

export const LandingBlockFactory: React.FC<LandingBlockFactoryProps> = ({
  data,
}) => {
  return (
    <BlockFactory
      data={data}
      blockRender={LandingBlockRenderer}
      incorrectBlockRender={LandingIncorrectBlockRenderer}
    />
  );
};
