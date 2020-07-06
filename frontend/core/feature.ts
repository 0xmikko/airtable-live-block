import { Record as ATRecord } from "@airtable/blocks/dist/types/src/models/models";
import { RecordExtractor, RecordMatcher } from "./recordExtractor";
import { Schema } from "./schema";
import { FieldType } from "@airtable/blocks/models";

export class Feature {
  image: string;
  icon: string;
  title: string;
  desc: string;
  smallFeatures: { title: string }[];

  constructor(record: ATRecord, matcher: RecordMatcher) {
    const recordExtractor = new RecordExtractor(record, matcher);

    this.title = recordExtractor.getString("title");
    this.icon = recordExtractor.getString("icon");
    this.desc = recordExtractor.getString("desc");
    this.image = recordExtractor.getAttachmentUrls("image")[0];
    this.icon = recordExtractor.getAttachmentUrls("image")[0];
  }
}

export const FeatureSchema: Schema = {
  title: {
    type: FieldType.SINGLE_LINE_TEXT,
    displayName: "Title",
  },
  image: {
    type: FieldType.MULTIPLE_ATTACHMENTS,
    displayName: "Side image",
  },
  icon: {
    type: FieldType.MULTIPLE_ATTACHMENTS,
    displayName: "Icon",
  },
  desc: {
    type: FieldType.MULTILINE_TEXT,
    displayName: "Description",
  },
};
