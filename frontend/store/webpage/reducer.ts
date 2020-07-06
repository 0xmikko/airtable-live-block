/*
 * Lean tool - hypothesis testing application
 *
 * https://github.com/MikaelLazarev/lean-tool/
 * Copyright (c) 2020. Mikhail Lazarev
 *
 */

import { createDataLoaderReducer } from "../dataloader/reducer";
import { WEBPAGE_PREFIX } from "./";
import {Webpage} from "../../core/webpage";

export default createDataLoaderReducer<Webpage>(WEBPAGE_PREFIX);
