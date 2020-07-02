/*
 * Lean tool - hypothesis testing application
 *
 * https://github.com/MikaelLazarev/lean-tool/
 * Copyright (c) 2020. Mikhail Lazarev
 *
 */

import { createDataLoaderReducer } from "../dataloader/reducer";
import { StoryPage } from "../../core/storyPage";
import { STORIES_PREFIX } from "./";

export default createDataLoaderReducer<StoryPage>(STORIES_PREFIX);
