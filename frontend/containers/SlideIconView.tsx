import React from "react";
import { Item } from "../core/Item";
import { Box } from "@airtable/blocks/ui";

export interface SlideIconViewProps {
  data: Item;
}

export const SlideIconView: React.FC<SlideIconViewProps> = ({ data }) => {
  return (
    <Box
      width={"16%"}
      margin={"2%"}
      display={"flex"}
      flexDirection={"column"}
      alignContent={"center"}
      alignItems={"center"}
    >
      <img
        src={data.images[0] || "unknown.jpg"}
        width={"100%"}
        height={"100%"}
      />
    </Box>
  );
};
