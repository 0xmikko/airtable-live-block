import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Box, Button, Heading, useBase, useRecords } from "@airtable/blocks/ui";
import { SlideDetailsView } from "../../containers/SlideDetailsView";
import actions from "../../store/actions";
import { Item } from "../../core/item";
import { ImageGallery } from "../../components/ImageGallery";
import { AppBar } from "../../components/AppBar";

export interface SlideDetailsProps {
  tableId?: string;
  id: string;
}
export const SlideDetailsScreen: React.FC<SlideDetailsProps> = ({
  tableId,
  id,
}) => {
  const base = useBase();
  const dispatch = useDispatch();
  const table = base.getTableByNameIfExists("Table 1");
  const records = useRecords(table);
  if (records.length === 0) {
    return <div>"Nothing to show"</div>;
  }

  const num = parseInt(id);

  const onPrev = () => {
    dispatch(
      actions.router.navigate({ url: "/details", id: (num - 1).toString() })
    );
  };

  const onNext = () => {
    dispatch(
      actions.router.navigate({ url: "/details", id: (num + 1).toString() })
    );
  };

  const data = new Item(records[num], num);

  return (
    <Box
      position="absolute"
      top={0}
      left={0}
      right={0}
      bottom={0}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="flex-start"
    >
      <AppBar />
      <SlideDetailsView
        header={data.header}
        description={data.description}
        images={<ImageGallery imagesUrl={data.images} />}
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
        <Heading size={"xsmall"}>
          {data.header} [{num + 1}]
        </Heading>
        <Box>
          <Button onClick={onPrev} marginRight={"10px"}>
            Prev
          </Button>
          <Button onClick={onNext}>Next</Button>
        </Box>
      </Box>
    </Box>
  );
};
