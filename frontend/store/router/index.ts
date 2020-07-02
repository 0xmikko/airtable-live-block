/*
 * Lean tool - hypothesis testing application
 *
 * https://github.com/MikaelLazarev/lean-tool/
 * Copyright (c) 2020. Mikhail Lazarev
 *
 */
import {Route} from "../../core/route";

export const ROUTER_PREFIX = 'ROUTER@@';

export type RouteActions = { type: 'ROUTER@@NAVIGATION', payload: Route }

export interface RouteState {
    route: Route;
}
