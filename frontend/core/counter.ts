import { Record as ATRecord } from "@airtable/blocks/dist/types/src/models/models";
import { RecordExtractor, RecordMatcher } from "./recordExtractor";
import {Schema} from "./schema";
import {FieldType} from "@airtable/blocks/models";

export class Counter {

  title: string;
  image: string;
  start: number;
  end: number;


  constructor(record: ATRecord, matcher: RecordMatcher) {
    const recordExtractor = new RecordExtractor(record, matcher);

    this.title = recordExtractor.getString("title");
    this.start = recordExtractor.getNumber("start");
    this.end = recordExtractor.getNumber("end");
    this.image = recordExtractor.getAttachmentUrls("image")[0];
  }
}

export const CounterSchema: Schema = {
    title: {
        type: FieldType.SINGLE_LINE_TEXT,
        displayName: "Title",
    },
    image: {
        type: FieldType.MULTIPLE_ATTACHMENTS,
        displayName: "Icon",
    },
    start: {
        type: FieldType.NUMBER,
        displayName: "Start value",
    },
    end: {
        type: FieldType.NUMBER,
        displayName: "Finish value",
    },
};
