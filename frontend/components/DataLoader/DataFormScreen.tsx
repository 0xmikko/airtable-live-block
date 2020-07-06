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
import { FormikFormViewProps } from "../Forms/FormikForm";

interface DataScreenFormProps<T> {
  data?: T;
  status: STATUS;
  component: (props: FormikFormViewProps<T>) => ReactElement<any, any> | null;
  onSubmit: (values: T) => void;
  isSubmitted: boolean;
}

export function DataFormScreen<T>({
  data,
  status,
  component,
  onSubmit,
  isSubmitted,
}: DataScreenFormProps<T>): ReactElement<any, any> | null {
  switch (status) {
    default:
    case STATUS.LOADING:
      return <Loading />;

    case STATUS.FAILURE:
      return <FailureView error="Oops! It's a problem connecting server" />;

    case STATUS.UPDATING:
    case STATUS.SUCCESS:
      return component({ data, onSubmit, isSubmitted });
  }
}
