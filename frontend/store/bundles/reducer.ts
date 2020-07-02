/*
 * Lean tool - hypothesis testing application
 *
 * https://github.com/MikaelLazarev/lean-tool/
 * Copyright (c) 2020. Mikhail Lazarev
 *
 */

import { createDataLoaderReducer } from "../dataloader/reducer";
import { BUNDLES_PREFIX } from "./";
import {Bundle} from "../../core/bundle";

export default createDataLoaderReducer<Bundle>(BUNDLES_PREFIX);
