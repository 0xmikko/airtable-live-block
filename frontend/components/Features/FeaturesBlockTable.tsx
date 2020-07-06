import React from "react";
import { Feature } from "../../core/feature";
import { BlockTableData} from "../../core/block";
import { FeatureBlock } from "./FeaturesBlock";
import {Record as ATRecord} from "@airtable/blocks/dist/types/src/models/models";
import {RecordMatcher} from "../../core/recordExtractor";


// Extracts needed data from records using Record matcher
export const featureBlockDataExtractor = (
    records: ATRecord[],
    matcher: RecordMatcher
): Feature[] => records.map((r) => new Feature(r, matcher));


// Render AirTable data using data Extractor
export const FeatureBlockTable: React.FC<BlockTableData> = ({ records, matcher }) => {
  return <FeatureBlock data={featureBlockDataExtractor(records, matcher)} />;
};
