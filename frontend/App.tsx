/*
 * Tezos-monsters - play game to lean Ligo and Tezos
 * Copyright (c) 2020. Mikhail Lazarev
 *
 */

import React, { useState } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import * as Sentry from "@sentry/browser";
import ReactGA from "react-ga";

import { Router } from "./screens/Router";
import configureStore from "./store";
import { GA_TRACKER } from "./config";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const store = configureStore();

// Sentry
if (process.env.NODE_ENV === "production") {
  Sentry.init({
    dsn: "https://cd19416ad99349d0bc8df4b50b374d4e@sentry.io/3026714",
  });
}

// Google analytics
ReactGA.initialize(GA_TRACKER);
ReactGA.pageview(window.location.pathname + window.location.search);

const options = {
  autoConfig: true, // set pixel's autoConfig
  debug: false, // enable logs
};

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
