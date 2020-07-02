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
import { SlideDetailsScreen } from "./screens/Slides/SlideDetailsScreen";
import configureStore from "./store";
import { Router } from "./screens/Router";

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
      <Router />
    </Provider>
  );
}

initializeBlock(() => <App />);
