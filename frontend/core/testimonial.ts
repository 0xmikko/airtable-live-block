import { Record as ATRecord } from "@airtable/blocks/dist/types/src/models/models";
import { RecordExtractor, RecordMatcher } from "./recordExtractor";
import {Schema} from "./schema";
import {FieldType} from "@airtable/blocks/models";

export class Testimonial {
  name: string;
  post: string;
  desc: string;

  constructor(record: ATRecord, matcher: RecordMatcher) {
    const recordExtractor = new RecordExtractor(record, matcher);

    this.name = recordExtractor.getString("name");
    this.post = recordExtractor.getString("post");
    this.desc = recordExtractor.getString("desc");
  }
}

export const TestimonialSchema: Schema = {
  name: {
    type: FieldType.SINGLE_LINE_TEXT,
    displayName: "Name",
  },
  post: {
    type: FieldType.SINGLE_LINE_TEXT,
    displayName: "Post",
  },
  desc: {
    type: FieldType.MULTILINE_TEXT,
    displayName: "Description",
  }

};
