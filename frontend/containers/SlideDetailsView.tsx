import React from "react";
import { Box, Heading } from "@airtable/blocks/ui";

export interface SlideDetailsViewProps {
  header?: string;
  description?: string;
  images?: React.ReactElement;
}

export const SlideDetailsView: React.FC<SlideDetailsViewProps> = ({
  header,
  description,
  images,
}) => {
  return (
    <Box
      top={0}
      left={0}
      right={0}
      bottom={0}
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
      // backgroundColor={"#f8f3c3"}
      height={"100%"}
    >
      <Box width={"65%"}>
        <Heading size={"xsmall"}>AirLive{images}</Heading>
      </Box>
      <Box
        width={"35%"}
        height={"100%"}
        display="flex"
        flexDirection="column"
        alignContent="flex-start"
        alignItems="flex-start"
        justifyContent="flex-start"
        padding={"30px 10px 30px 10px"}
      >
        <Heading size={"large"}>{header}</Heading>
        {description.split("\n").map((i) => {return <div>{i}</div>;})}
      </Box>
    </Box>
  );
};
