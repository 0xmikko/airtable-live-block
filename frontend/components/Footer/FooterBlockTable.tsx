import { BlockTableData } from "../../core/block";
import React from "react";
import { FooterBlock } from "./FooterBlock";
import { Footer } from "../../core/footer";
import { Record as ATRecord } from "@airtable/blocks/dist/types/src/models/models";
import { RecordMatcher } from "../../core/recordExtractor";

// Extracts needed data from records using Record matcher
export const footerBlockDataExtractor = (
  records: ATRecord[],
  matcher: RecordMatcher
): Footer[] => {
  return  records.slice(0, 1).map((r) => new Footer(r, matcher));
}


// Render AirTable data using data Extractor
export const FooterBlockTable: React.FC<BlockTableData> = ({
  records,
  matcher,
}) => {
  const data =footerBlockDataExtractor(records, matcher)[0]
  return <FooterBlock data={data} />;
};
