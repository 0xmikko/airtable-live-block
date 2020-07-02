import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Box, Button, Heading, useBase, useRecords } from "@airtable/blocks/ui";
import { SlidesListView } from "../../containers/SlidesListView";
import { Item } from "../../core/item";
import {AppBar} from "../../components/AppBar";

export interface SlideListProps {
  tableId?: string;
}
export const SlideListScreen: React.FC<SlideListProps> = ({ tableId }) => {
  const base = useBase();
  const dispatch = useDispatch();
  const table = base.getTableByNameIfExists("Table 1");
  const records = useRecords(table);
  if (records.length === 0) {
    return <div>"Nothing to show"</div>;
  }

  const data: Item[] = records.map((record, index) => new Item(record, index));
  console.log("RDDE", records, data);

  return  <Box
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
    <AppBar /><SlidesListView data={data} /></Box>;
};
