import React from "react";
import { BlockTableData } from "../../core/block";
import { ClientLogoBlock } from "./ClientLogoBlock";
import { ClientLogo } from "../../core/clientLogo";
import { Record as ATRecord } from "@airtable/blocks/dist/types/src/models/models";
import { RecordMatcher } from "../../core/recordExtractor";


// Extracts needed data from records using Record matcher
export const clientLogoBlockDataExtractor = (
  records: ATRecord[],
  matcher: RecordMatcher
): ClientLogo[] => records.map((r) => new ClientLogo(r, matcher));


// Render AirTable data using data Extractor
export const ClientLogoBlockTable: React.FC<BlockTableData> = ({
  records,
  matcher,
}) => {
  return (
    <ClientLogoBlock data={clientLogoBlockDataExtractor(records, matcher)} />
  );
};
