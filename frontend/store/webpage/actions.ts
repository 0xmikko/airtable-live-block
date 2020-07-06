/*
 * Lean tool - hypothesis testing application
 *
 * https://github.com/MikaelLazarev/lean-tool/
 * Copyright (c) 2020. Mikhail Lazarev
 *
 */

import { endpoint, WEBPAGE_PREFIX } from "./";
import {
  createDataLoaderCreateUpdateDataAction,
  createDataLoaderDetailActions,
  createDataLoaderListActions, createDataLoaderUploadFileAction
} from "../dataloader/actions";
import {Bundle} from "../../core/bundle";

export const getDetails = createDataLoaderDetailActions(
  endpoint + ":id/",
  WEBPAGE_PREFIX
);


