import React, { useState } from "react";
import { Box, Button, Heading, useBase, useRecords } from "@airtable/blocks/ui";
import { SlideDetailsView } from "../containers/SlideDetailsView";
import { AttachmentImageViewer } from "../components/AttachmentImageViewer";

export interface SlideDetailsProps {}
export const SlideDetails: React.FC<SlideDetailsProps> = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const base = useBase();
  const table = base.getTableByNameIfExists("Table 1");
  const records = useRecords(table);
  if (records.length === 0) {
    return <div>"Nothing to show"</div>;
  }

  const onPrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const onNext = () => {
    if (currentSlide < records.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const data = records[currentSlide];

  return (
    <>
      <SlideDetailsView
        header={data.getCellValueAsString("Name")}
        description={data.getCellValueAsString("Description")}
        images={
          <AttachmentImageViewer
            record={data}
            attachmentField={"Attachments"}
          />
        }
      />
      <Box
        display="flex"
        flexDirection="row"
        alignContent="center"
        alignItems="center"
        justifyContent="space-between"
        width={"100%"}
        paddingLeft={"20px"}
        paddingRight={"20px"}
        paddingTop={"8px"}
        paddingBottom={"8px"}
        backgroundColor={"#8ca5ff"}
      >
        <Heading size={"xsmall"}>{data.getCellValueAsString("Name")} [{currentSlide+1}]</Heading>
        <Box>
          <Button onClick={onPrev} marginRight={"10px"}>
            Prev
          </Button>
          <Button onClick={onNext}>Next</Button>
        </Box>
      </Box>
    </>
  );
};
