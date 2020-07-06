/*
 *  Buzz Chat - Spam-free decentralized chat
 *
 *  https://github.com/MikaelLazarev/buzzchat
 *  Copyright (c) 2020. Mikhail Lazarev
 */

import React from "react";

interface FailureProps {
  error: string;
}

const FailureView: React.FC<FailureProps> = ({ error }) => <div>{error}</div>;

export default FailureView;
