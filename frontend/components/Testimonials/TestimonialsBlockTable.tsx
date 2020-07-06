import React from "react";
import { BlockTableData } from "../../core/block";
import { TestimonialsBlock } from "./TestimonialsBlock";
import { Testimonial } from "../../core/testimonial";
import {Record as ATRecord} from "@airtable/blocks/dist/types/src/models/models";
import {RecordMatcher} from "../../core/recordExtractor";


// Extracts needed data from records using Record matcher
export const testimonialBlockDataExtractor = (
    records: ATRecord[],
    matcher: RecordMatcher
): Testimonial[] => records.map((r) => new Testimonial(r, matcher));


// Render AirTable data using data Extractor
export const TestimonialsBlockTable: React.FC<BlockTableData> = ({
  records,
  matcher,
}) => {
  return <TestimonialsBlock data={testimonialBlockDataExtractor(records, matcher)} />;
};
