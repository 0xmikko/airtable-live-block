/*
 * Lean tool - hypothesis testing application
 *
 * https://github.com/MikaelLazarev/lean-tool/
 * Copyright (c) 2020. Mikhail Lazarev
 *
 */

import React from 'react';
import {BeatLoader} from 'react-spinners';

export const Loading : React.FC = () => (
  <div style={{width: '100%'}}>
    <BeatLoader />
  </div>
);
