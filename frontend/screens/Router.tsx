/*
 * Copyright (c) 2020. Mikhail Lazarev
 *
 */

import React, { useEffect } from "react";
import { Redirect, Route, Switch } from "react-router";

import { useDispatch, useSelector } from "react-redux";
import actions from "../store/actions";
import { RootState } from "../store";
import { STATUS } from "../store/utils/status";
import {withTracker} from "../components/withTrackerHOC";

export const Router: React.FC = () => {
      return (
          <Switch>
              <Route
                  path="/:id"
                  exact={true}
                  component={withTracker(LandingWeb)}
              />
            <Route
                path="/login/"
                exact={true}
                component={withTracker(LoginScreen)}
            />

            <Route
                path="/login/google/done/"
                exact={true}
                render={() => <GoogleAuthDoneScreen method={"login"} />}
            />

            <Route path={"*"} component={withTracker(LoginScreen)} />
          </Switch>
      );
    case STATUS.SUCCESS:
      return (
        <>

          <Switch>
            <Route exact path="/" component={WelcomeScreen} />
            <Route exact path="/story" component={StoryScreen} />

            <Route path={"*"}>
              <Redirect to={"/story"} />
            </Route>
          </Switch>
        </>
      );
  }
};
