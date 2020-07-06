import { Record as ATRecord } from "@airtable/blocks/models";

export interface AttachmentObj {
  id: string;
  url: string;
}

export interface RecordMatcher {
  tableId: string;
  fieldIds: Record<string, string>;
}

export class RecordExtractor {
  private _matcher: RecordMatcher;
  private _record: ATRecord;

  constructor(record: ATRecord, matcher: RecordMatcher) {
    this._matcher = matcher;
    this._record = record;
  }

  public getString(key: string): string {
    const intKey = this._matcher.fieldIds[key];
    if (intKey === undefined) return "Cant find key :" + key;
    return this._record.getCellValueAsString(intKey);
  }

  public getNumber(key: string): number {
    const intKey = this._matcher.fieldIds[key];
    if (intKey === undefined) {
      console.log("ACHTUNG", this._record, this._matcher);
      console.log("Invalid key: ", key);
      return 0;
    }
    return this._record.getCellValue(intKey) as number;
  }

  public getAttachmentUrls(key: string): string[] {
    const intKey = this._matcher.fieldIds[key];
    if (intKey === undefined) {
      console.log("Invalid key: ", key);
      return [];
    }
    const attachmentCellValue = this._record.getCellValue(
      intKey
    ) as AttachmentObj[];
    if (attachmentCellValue === null) {
      return [];
    }
    const urls = attachmentCellValue.map((attachmentObj) =>attachmentObj.url
      // this._record.getAttachmentClientUrlFromCellValueUrl(
      //   attachmentObj.id,
      //   attachmentObj.url
      // )
    );

    // if (urls.length >0) {
    //   console.log("TRY TO FETCH", urls[0])
    //    fetch(urls[0])
    //        .then( response => response.body.getReader().read())
    //        .then( body => {
    //          })
    //        })
    // }

    return urls;
  }
}
