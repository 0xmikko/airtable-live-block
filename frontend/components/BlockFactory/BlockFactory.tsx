import React, { ReactElement, useEffect, useState } from "react";
import { Block, BlockTableData, LandingsBlocks } from "../../core/block";
import { SectionWrapper } from "../Section/SectionWrapper";
import { useBase, useGlobalConfig, useRecords } from "@airtable/blocks/ui";
import { Record as ATRecord } from "@airtable/blocks/models";
import { RecordMatcher } from "../../core/recordExtractor";
import { NullBlockTable } from "../NullBlock/NullBlockTable";
import { LandingIncorrectBlockRenderer } from "./LandingIncorrectBlockRenderer";

export interface BlockRendererProps {
  block: Block;
  records: ATRecord[];
  matcher: RecordMatcher;
  index: number;
  bundleName?: string;
  startUpload?: boolean;
}

export interface IncorrectBlockRendererProps {
  block: Block;
  message: string;
}

export interface BlockLandingProps {
  data: Block[];
  blockRender: (props: BlockRendererProps) => ReactElement<any, any> | null;
  incorrectBlockRender: (
    props: IncorrectBlockRendererProps
  ) => ReactElement<any, any> | null;
  exportJson?: (string) => void;
  bundleName?: string;
  startUpload?: boolean;
}

export const BlockFactory: React.FC<BlockLandingProps> = ({
  data,
  blockRender,
  incorrectBlockRender,
  exportJson,
  bundleName,
  startUpload,
}) => {
  const renderedJSON = new Map<number, Block>();

  const renderedBlocks = data
    .filter((block) => LandingsBlocks[block.type] !== undefined)
    .map((block, index) => {
      if (block.type === "NULL") {
        const message = `Unrecognized block type: ${block.title}`;
        return (
          <div key={index}>{incorrectBlockRender({ block, message })}</div>
        );
      }
      const globalConfig = useGlobalConfig();
      const recordMatcherString = globalConfig.get(
        `MATCHER${block.id}`
      ) as string;
      if (recordMatcherString === undefined) {
        const message = "Incorrect schema";
        return (
          <div key={index}>{incorrectBlockRender({ block, message })}</div>
        );
      }

      const recordMatcher = JSON.parse(recordMatcherString) as RecordMatcher;

      const base = useBase();
      const table = base.getTableByIdIfExists(recordMatcher.tableId);

      if (table === null) {
        const message = "Incorrect schema";
        return (
          <div key={index}>{incorrectBlockRender({ block, message })}</div>
        );
      }

      const records = useRecords(table);
      if (records === null || records === undefined || records.length===0) {
        const message = `No data records was found`;
        return (
          <div key={index}>{incorrectBlockRender({ block, message })}</div>
        );
      }

      // Render element
      return (
        <div key={index}>
          {blockRender({
            block,
            records,
            matcher: recordMatcher,
            index,
            bundleName,
            startUpload,
          })}
        </div>
      );
    });

  useEffect(() => {
    if (exportJson !== undefined) {
      exportJson(JSON.stringify(renderedJSON));
    }
  }, [renderedJSON]);

  return <>{renderedBlocks}</>;
};
