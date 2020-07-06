import {
  initializeBlock,
  loadCSSFromURLAsync,
} from "@airtable/blocks/ui";
import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { viewport } from "@airtable/blocks";
import configureStore from "./store";
import { Router } from "./screens/Router";

// Determines the maximum size of the block in fullscreen mode.
viewport.addMaxFullscreenSize({
  height: 1020,
  width: 1400,
});

viewport.addMinSize({
  height: 260,
  width: 400,
});

const store = configureStore();

function App() {
  useEffect(() => {
    loadCSSFromURLAsync(
      "https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
    ).then(() => console.log("Ok"));
    loadCSSFromURLAsync(
      "https://storage.googleapis.com/airtable-live/style.css"
    ).then(() => console.log("Ok"));
    loadCSSFromURLAsync(
      "https://storage.googleapis.com/airtable-live/swiper-bundle.min.css"
    ).then(() => console.log("Ok"));
  }, []);
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

initializeBlock(() => <App />);
