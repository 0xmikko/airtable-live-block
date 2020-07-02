/*
 * Lean tool - hypothesis testing application
 *
 * https://github.com/MikaelLazarev/lean-tool/
 * Copyright (c) 2020. Mikhail Lazarev
 *
 */

import { endpoint, STORIES_PREFIX } from "./";

import {
  createDataLoaderCreateUpdateDataAction,
  createDataLoaderDetailActions,
  createDataLoaderListActions,
    createDataLoaderUploadFileAction,
} from "../dataloader/actions";
import { StoryPage } from "../../core/storyPage";
import {createAction} from "redux-api-middleware";

export const getList = createDataLoaderListActions(endpoint, STORIES_PREFIX);

export const getDetails = createDataLoaderDetailActions(
  endpoint + "editor/:id/",
  STORIES_PREFIX
);

export const createUpdateDetails = createDataLoaderCreateUpdateDataAction<
  StoryPage
>(endpoint, endpoint + ":id/", STORIES_PREFIX);


export const uploadPicture = createDataLoaderUploadFileAction(endpoint + 'upload/:id/', STORIES_PREFIX);

