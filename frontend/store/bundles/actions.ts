/*
 * Lean tool - hypothesis testing application
 *
 * https://github.com/MikaelLazarev/lean-tool/
 * Copyright (c) 2020. Mikhail Lazarev
 *
 */

import { endpoint, BUNDLES_PREFIX } from "./";
import {
  createDataLoaderCreateUpdateDataAction,
  createDataLoaderDetailActions,
  createDataLoaderListActions, createDataLoaderUploadFileAction
} from "../dataloader/actions";
import {Bundle} from "../../core/bundle";

export const getList = createDataLoaderListActions(endpoint, BUNDLES_PREFIX);

export const getDetails = createDataLoaderDetailActions(
  endpoint + "editor/:id/",
  BUNDLES_PREFIX
);

export const createUpdateDetails = createDataLoaderCreateUpdateDataAction<
  Bundle
>(endpoint, endpoint + "block/:id/", BUNDLES_PREFIX);

export const uploadPicture = createDataLoaderUploadFileAction(endpoint + 'upload/:id/', BUNDLES_PREFIX);

