/*
 * Buzzzchat - P2P Chat based on Bluzelle DB
 * Copyright (c) 2020. Mikhail Lazarev
 */

import * as auth from "./auth/actions";
import * as operations from "./operations/actions";
import * as bundles from "./bundles/actions";
import * as router from "./router/actions";
import { ThunkAction } from "redux-thunk";
import { RootState } from "./index";
import { Action } from "redux";

export default {
  auth,
  operations,
  bundles,
  router,
};

// Connect socket connects redux with socket server interface
export const actionsAfterAuth = (): ThunkAction<
  void,
  RootState,
  unknown,
  Action<string>
> => async (dispatch) => {
  // Connect sockets to listen server events
};
