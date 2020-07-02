import {
  Box,
  Button,
  Heading,
  initializeBlock,
  TextButton,
} from "@airtable/blocks/ui";
import React from "react";
import { viewport } from "@airtable/blocks";

// Determines the maximum size of the block in fullscreen mode.
viewport.addMaxFullscreenSize({
  height: 620,
  width: 840,
});

viewport.addMinSize({
  height: 260,
  width: 400,
});

function App() {
  // YOUR CODE GOES HERE
  return (
    <>
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="space-between"
      >
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
        <Box display="flex"
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
        <Button onClick={() => console.log("erer")} marginRight={"10px"}>Prev</Button>
        <Button onClick={() => console.log("erer")}>Next</Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}

initializeBlock(() => <App />);
