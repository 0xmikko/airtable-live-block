import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Box, Button, Heading, useBase, useRecords } from "@airtable/blocks/ui";
import { SlidesListView } from "../containers/SlidesListView";
import { Item } from "../core/item";

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

  return <SlidesListView data={data} />;
};
