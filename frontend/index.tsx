import {
  Box,
  Button,
  Heading,
  initializeBlock,
  TextButton,
} from "@airtable/blocks/ui";
import React from "react";
import { Provider } from "react-redux";
import { viewport } from "@airtable/blocks";
import { AppBar } from "./components/AppBar";
import { SlideDetails } from "./screens/SlideDetails";
import configureStore from "./store";

// Determines the maximum size of the block in fullscreen mode.
viewport.addMaxFullscreenSize({
  height: 620,
  width: 840,
});

viewport.addMinSize({
  height: 260,
  width: 400,
});

const store = configureStore();

function App() {
  // YOUR CODE GOES HERE
  return (
    <Provider store={store}>
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
        <AppBar />
        <SlideDetails />
      </Box>
    </Provider>
  );
}

initializeBlock(() => <App />);
