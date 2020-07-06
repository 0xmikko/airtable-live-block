/*
 * Buzzzchat - P2P Chat based on Bluzelle DB
 * Copyright (c) 2020. Mikhail Lazarev
 */

import { combineReducers } from "redux";
import auth from "./auth/reducer";
import operations from "./operations/reducer";
import bundles from "./bundles/reducer";
import router from "./router/reducer";

export default combineReducers({
  auth,
  operations,
  bundles,
  router,
});
