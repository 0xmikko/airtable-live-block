/*
 * Lean tool - hypothesis testing application
 *
 * https://github.com/MikaelLazarev/lean-tool/
 * Copyright (c) 2020. Mikhail Lazarev
 *
 */
import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { RouteComponentProps, useHistory } from "react-router";

import { RootState } from "../../store";

import actions from "../../store/actions";
import { STATUS } from "../../store/utils/status";
import { Loading } from "../../components/Loading";
import { getDetailsItem } from "../../store/dataloader";
import { DataScreen } from "../../components/DataLoader/DataScreen";
import {WebRenderer} from "../../components/Web/WebRenderer";

interface MatchParams {
  id: string;
  tab?: string;
}

interface LandingWebProps {}
// extends RouteComponentProps<MatchParams> {}

export const LandingWebScreen: React.FC<LandingWebProps> = ({
  // match: {
  //   params: { id },
  // },
}: LandingWebProps) => {
  const dispatch = useDispatch();

  const id="landing";

  useEffect(() => {
    dispatch(actions.webpage.getDetails(id));
  }, [id]);

  const dataItem = useSelector((state: RootState) =>
    getDetailsItem(state.webpage.Details, id)
  );

  console.log("KOOLA", dataItem);

  if (!dataItem || !dataItem.data || dataItem.status === STATUS.LOADING) {
    return <Loading />;
  }

  const { data, status } = dataItem;

  return (
    <div className="content content-fixed">
      <DataScreen data={data} status={status} component={WebRenderer} />
    </div>
  );
};
