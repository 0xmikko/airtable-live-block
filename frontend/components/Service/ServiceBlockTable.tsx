import React from "react";
import {ServiceBlock} from "./ServiceBlock";
import {BlockTableData} from "../../core/block";
import {Service} from "../../core/service";
import {Record as ATRecord} from "@airtable/blocks/dist/types/src/models/models";
import {RecordMatcher} from "../../core/recordExtractor";


// Extracts needed data from records using Record matcher
export const serviceBlockDataExtractor = (
    records: ATRecord[],
    matcher: RecordMatcher
): Service[] => records.map((r) => new Service(r, matcher));


// Render AirTable data using data Extractor
export const ServiceBlockTable: React.FC<BlockTableData> = ({records, matcher}) => {
  return <ServiceBlock data={serviceBlockDataExtractor(records, matcher)} />
};
