import { Schema } from "./schema";
import { FieldType, Record as ATRecord } from "@airtable/blocks/models";
import { RecordExtractor, RecordMatcher } from "./recordExtractor";

export class Hero {
  image: string;
  subtitle: string;
  title: string;
  desc: string;

  constructor(record: ATRecord, matcher: RecordMatcher) {
    const recordExtractor = new RecordExtractor(record, matcher);

    this.subtitle = recordExtractor.getString("subtitle");
    this.title = recordExtractor.getString("title");
    this.desc = recordExtractor.getString("desc");
    this.image = recordExtractor.getAttachmentUrls("image")[0];
  }
}

export const HeroSchema: Schema = {
  title: {
    type: FieldType.MULTILINE_TEXT,
    displayName: "Title",
  },

  subtitle: {
    type: FieldType.SINGLE_LINE_TEXT,
    displayName: "Subtitle",
  },

  desc: {
    type: FieldType.SINGLE_LINE_TEXT,
    displayName: "Description",
  },
  image: {
    type: FieldType.MULTIPLE_ATTACHMENTS,
    displayName: "Background image",
  },
};
