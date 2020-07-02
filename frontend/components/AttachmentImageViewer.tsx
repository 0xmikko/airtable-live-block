import React, { useState } from "react";
import Record from "@airtable/blocks/dist/types/src/models/record";
import Field from "@airtable/blocks/dist/types/src/models/field";
import { Box } from "@airtable/blocks/ui";

interface AttachmentObj {
  id: string;
  url: string;
}

interface RecordAttachmentsProps {
  record: Record;
  attachmentField: string;
}

export function AttachmentImageViewer({
  record,
  attachmentField,
}: RecordAttachmentsProps) {
  const attachmentCellValue = record.getCellValue(
    attachmentField
  ) as AttachmentObj[];
  if (attachmentCellValue === null) {
    return null;
  }

  const [currentImage, setCurrentImage] = useState("");

  return (
    <>
      <Box>
        <img
          src={currentImage}
          width={"100%"}
          height={"70%"}
          style={{ marginRight: "10px", maxHeight:'60%' }}
        />
      </Box>
      <Box overflowX={"scroll"} display={"flex"} flexDirection={"row"}>
        {attachmentCellValue.map((attachmentObj) => {
          const clientUrl = record.getAttachmentClientUrlFromCellValueUrl(
            attachmentObj.id,
            attachmentObj.url
          );
          return (
            <img
              key={attachmentObj.id}
              src={clientUrl}
              width={"30%"}
              height={"30%"}
              style={{ marginRight: "10px" }}
              onClick={() => setCurrentImage(attachmentObj.url)}
            />
          );
        })}
      </Box>
    </>
  );
}
