/*
 *  Buzz Chat - Spam-free decentralized chat
 *
 *  https://github.com/MikaelLazarev/buzzchat
 *  Copyright (c) 2020. Mikhail Lazarev
 */

import React, { ReactElement } from "react";
import { STATUS } from "../../store/utils/status";
import { Loading } from "../Loading";
import FailureView from "../Failure";

export interface DataScreenComponentProps<T> {
  data: T;
  onSelect?: (id: string) => void;
  onSubmit?: (values: T) => void;
  isSubmitted?: boolean;
}

interface DataScreenProps<T> {
  data: T;
  status: STATUS;
  component: (props: DataScreenComponentProps<T>) => ReactElement<any, any> | null;
  onSelect?: (id: string) => void;
}

export function DataScreen<T>({
  data,
  status,
  component,
  onSelect,
}: DataScreenProps<T>): ReactElement<any, any> | null {
  switch (status) {
    default:
    case STATUS.LOADING:
      return <Loading />;

    case STATUS.FAILURE:
      return <FailureView error="Oops! It's a problem connecting server" />;

    case STATUS.UPDATING:
    case STATUS.SUCCESS:
      return component({ data, onSelect });
  }
}
