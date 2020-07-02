import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { SlideDetailsScreen } from "./SlideDetailsScreen";
import {SlideListScreen} from "./SlideListScreen";

export const Router: React.FC = () => {
  const {url, id} = useSelector((state: RootState) => state.router.route);
  console.log(url, id);
  switch (url) {
    default:
      return <SlideListScreen />;
    case '/details':
      return <SlideDetailsScreen id={id} />
  }
};
