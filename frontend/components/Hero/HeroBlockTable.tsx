import React from "react";
import { Hero } from "../../core/hero";
import { HeroBlock } from "./HeroBlock";
import { BlockTableData } from "../../core/block";
import { Record as ATRecord } from "@airtable/blocks/models";
import { RecordMatcher } from "../../core/recordExtractor";

// Extracts needed data from records using Record matcher
export const heroBlockDataExtractor = (
  records: ATRecord[],
  matcher: RecordMatcher
): Hero[] => records.slice(0, 1).map((r) => new Hero(r, matcher));

// Render AirTable data using data Extractor
export const HeroBlockTable: React.FC<BlockTableData> = ({
  records,
  matcher,
}) => {
  return <HeroBlock data={heroBlockDataExtractor(records, matcher)[0]} />;
};
