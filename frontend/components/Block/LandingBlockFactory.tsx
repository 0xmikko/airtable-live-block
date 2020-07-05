import React from "react";
import { Block, BlockTableData, LandingsBlocks } from "../../core/block";
import { SectionWrapper } from "../Section/SectionWrapper";
import { useBase, useGlobalConfig, useRecords } from "@airtable/blocks/ui";
import { RecordMatcher } from "../../core/recordExtractor";

export interface BlockLandingProps {
  data: Block[];
}

export const LandingBlockFactory: React.FC<BlockLandingProps> = ({ data }) => {
  const renderedBlocks = data
    .filter((block) => LandingsBlocks[block.type] !== undefined)
    .map((block) => {
      const globalConfig = useGlobalConfig();
      const recordMatcherString = globalConfig.get(
        `MATCHER${block.id}`
      ) as string;
      if (recordMatcherString === undefined) {
        return <div>"Please, define schema correctly"</div>;
      }

      const recordMatcher = JSON.parse(recordMatcherString) as RecordMatcher;

      const base = useBase();
      const table = base.getTableByIdIfExists(recordMatcher.tableId);

      if (table === null) {
        return <div>"Please, define schema correctly"</div>;
      }

      const records = useRecords(table);
      if (records === null || records === undefined)
        return <div> No one entry found</div>;

      const renderedBlock = React.createElement<BlockTableData>(
        LandingsBlocks[block.type].blockTable,
        {
          data: records,
          matcher: recordMatcher,
        }
      );

      return LandingsBlocks[block.type].renderInSection ? (
        <SectionWrapper data={block}>{renderedBlock}</SectionWrapper>
      ) : (
        renderedBlock
      );
    });

  return <>{renderedBlocks}</>;
};
