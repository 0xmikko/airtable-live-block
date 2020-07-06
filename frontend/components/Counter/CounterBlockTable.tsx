import React from "react";
import { Counter } from "../../core/counter";
import { BlockTableData } from "../../core/block";
import CounterBlock from "./CounterBlock";
import { Record as ATRecord } from "@airtable/blocks/dist/types/src/models/models";
import { RecordMatcher } from "../../core/recordExtractor";


// Extracts needed data from records using Record matcher
export const counterBlockDataExtractor = (
  records: ATRecord[],
  matcher: RecordMatcher
): Counter[] => records.map((r) => new Counter(r, matcher));


// Render AirTable data using data Extractor
export const CounterBlockTable: React.FC<BlockTableData> = ({
  records,
  matcher,
}) => {
  return <CounterBlock data={counterBlockDataExtractor(records, matcher)} />;
};
