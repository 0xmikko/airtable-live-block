import { Schema } from "./schema";
import { FieldType, Record as ATRecord } from "@airtable/blocks/models";
import { RecordExtractor, RecordMatcher } from "./recordExtractor";

export class ClientLogo {
  name: string;
  image: string;

  constructor(record: ATRecord, matcher: RecordMatcher) {
    const recordExtractor = new RecordExtractor(record, matcher);
    this.name = recordExtractor.getString("name");
    this.image = recordExtractor.getAttachmentUrls("image")[0];
  }
}

export const ClientSchema: Schema = {
  name: {
    type: FieldType.SINGLE_LINE_TEXT,
    displayName: "Name",
  },
  image: {
    type: FieldType.MULTIPLE_ATTACHMENTS,
    displayName: "Background image",
  },
};
