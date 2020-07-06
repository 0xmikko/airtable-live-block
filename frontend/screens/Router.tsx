/*
 * Copyright (c) 2020. Mikhail Lazarev
 *
 */

import React from "react";
import { Route, Switch } from "react-router";

import { withTracker } from "../components/withTrackerHOC";
import { LandingWebScreen } from "./Landing/LandingWeb";

export const Router: React.FC = () => {
  return (
    <Switch>
      <Route path="/:id" exact={true} component={withTracker(LandingWebScreen)} />
      <Route path={"*"} component={withTracker(LandingWebScreen)} />
    </Switch>
  );
};
