/*
 * Lean tool - hypothesis testing application
 *
 * https://github.com/MikaelLazarev/lean-tool/
 * Copyright (c) 2020. Mikhail Lazarev
 *
 */

import { RouteActions, RouteState } from "./index";

const initialState: RouteState = {
  route: {
    url: "/",
    id: undefined,
  },
};

export default function (
  state: RouteState = initialState,
  action: RouteActions
): RouteState {
  switch (action.type) {
    default:
      return state;
    case "ROUTER@@NAVIGATION":
      return {
        ...state,
        route: action.payload,
      };
  }
}
