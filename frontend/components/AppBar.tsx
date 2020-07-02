import { Box, Button, Heading } from "@airtable/blocks/ui";
import React from "react";

export function AppBar() {
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
      backgroundColor={"#8ca5ff"}
    >
      <Heading size={"xsmall"}>AirLive</Heading>
      <Box>
        <Button marginRight={"10px"}>Settings</Button>
        <Button>Publish</Button>
      </Box>
    </Box>
  );
}
