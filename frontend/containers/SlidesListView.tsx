import React from "react";
import { Item } from "../core/Item";
import { Box } from "@airtable/blocks/ui";
import { SlideIconView } from "./SlideIconView";

export interface SlideDetailsViewProps {
  data: Item[];
}

export const SlidesListView: React.FC<SlideDetailsViewProps> = ({ data }) => {
  const gridRendered: React.ReactElement[] = [];
  for (let i = 0; i < data.length / 5; i++) {
    const line: React.ReactElement[] = [];
    for (let j = 0; j < 5; j++) {
      const item = data[i * 5 + j];
      line.push(<SlideIconView key={i * 5 + j} data={item} />);
    }
    gridRendered.push(
      <Box display={"flex"} flexDirection={"row"} width={"100%"}>
        {line}
      </Box>
    );
  }

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"flex-start"}
      alignContent={'flex-start'}
      justifyContent={"flex-start"}
    >
      {gridRendered}
    </Box>
  );
};
