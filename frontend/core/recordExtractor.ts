import { FieldType, Record as ATRecord } from "@airtable/blocks/models";

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
    return this._record.getCellValueAsString(this._matcher.fieldIds[key]);
  }

  public getNumber(key: string): number {
    return this._record.getCellValue(this._matcher.fieldIds[key]) as number;
  }

  public getAttachmentUrls(key: string): string[] {
    const attachmentCellValue = this._record.getCellValue(
      this._matcher.fieldIds[key]
    ) as AttachmentObj[];
    if (attachmentCellValue !== null) {
      return attachmentCellValue.map((attachmentObj) =>
        this._record.getAttachmentClientUrlFromCellValueUrl(
          attachmentObj.id,
          attachmentObj.url
        )
      );
    }
    return [];
  }
}
