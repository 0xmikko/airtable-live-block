import { Entry, Schema } from "./schema";
import { FieldType, Record as ATRecord } from "@airtable/blocks/models";
import { RecordExtractor, RecordMatcher } from "./recordExtractor";

export class Footer {
  about: string;
  address: string;
  email: string;
  phone: string;

  constructor(record: ATRecord, matcher: RecordMatcher) {
    const recordExtractor = new RecordExtractor(record, matcher);

    this.about = recordExtractor.getString("about");
    this.address = recordExtractor.getString("address");
    this.email = recordExtractor.getString("email");
    this.phone = recordExtractor.getString("phone");
  }
}

export const FooterSchema: Schema = {
  about: {
    type: FieldType.MULTILINE_TEXT,
    displayName: "About",
  },

  address: {
    type: FieldType.SINGLE_LINE_TEXT,
    displayName: "Address",
  },

  email: {
    type: FieldType.EMAIL,
    displayName: "Email",
  },
  phone: {
    type: FieldType.PHONE_NUMBER,
    displayName: "Phone number",
  },
};


