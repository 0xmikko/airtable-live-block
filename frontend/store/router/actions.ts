/*
 * Lean tool - hypothesis testing application
 *
 * https://github.com/MikaelLazarev/lean-tool/
 * Copyright (c) 2020. Mikhail Lazarev
 *
 */

import {Route} from "../../core/route";
import {RouteActions} from "./index";

export const navigate = (route: Route)  : RouteActions => ({
    type: 'ROUTER@@NAVIGATION',
    payload: route,
})

