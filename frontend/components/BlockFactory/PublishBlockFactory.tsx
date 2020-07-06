import React from "react";
import { Block } from "../../core/block";
import { BlockFactory } from "./BlockFactory";
import { LandingBlockRenderer } from "./LandingBlockRenderer";
import { LandingIncorrectBlockRenderer } from "./LandingIncorrectBlockRenderer";
import { PublishBlockRenderer } from "./PublishBlockRenderer";
import {startUpload} from "../../store/publisher/actions";
import {PublishIncorrectBlockRenderer} from "./PublishIncorrectBlockRenderer";

export interface PublishBlockFactoryProps {
  data: Block[];
  bundleName: string;
  startUpload: boolean;
}

export const PublishBlockFactory: React.FC<PublishBlockFactoryProps> = ({
  data,
  bundleName,
    startUpload,
}) => {
  return (
    <BlockFactory
      data={data}
      blockRender={PublishBlockRenderer}
      incorrectBlockRender={PublishIncorrectBlockRenderer}
      bundleName={bundleName}
      startUpload={startUpload}
    />
  );
};
