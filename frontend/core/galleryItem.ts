import Record from "@airtable/blocks/dist/types/src/models/record";

interface AttachmentObj {
  id: string;
  url: string;
}

export class GalleryItem {
  id: string;
  index? : number;
  header?: string;
  description?: string;
  images?: string[];
  price?: number;
  offer?: number;
  sizes?: string[];

  constructor(record: Record, index: number) {
    this.id = record.id;
    this.index = index;
    this.header = record.getCellValueAsString("Name");
    this.description = record.getCellValueAsString("Description");

    this.images = [];
    const attachmentCellValue = record.getCellValue(
      "Attachments"
    ) as AttachmentObj[];
    if (attachmentCellValue !== null) {
      this.images = attachmentCellValue.map((attachmentObj) =>
        record.getAttachmentClientUrlFromCellValueUrl(
          attachmentObj.id,
          attachmentObj.url
        )
      );
    }
    this.price = record.getCellValue("Price") as number;
    this.offer = record.getCellValue("Price") as number;
  }


}
