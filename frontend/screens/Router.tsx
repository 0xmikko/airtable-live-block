import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { SlideDetailsScreen } from "./Slides/SlideDetailsScreen";
import { SlideListScreen } from "./Slides/SlideListScreen";
import { Landing } from "./Landing/LandingSchema";
import { loadCSSFromURLAsync } from "@airtable/blocks/ui";

export const Router: React.FC = () => {
  useEffect(() => {
    loadCSSFromURLAsync(
      "https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
    ).then(() => console.log("Ok"));
    loadCSSFromURLAsync(
        "https://storage.googleapis.com/airtable-live/style.css"
    ).then(() => console.log("Ok"));
    loadCSSFromURLAsync(
        "https://storage.googleapis.com/airtable-live/swiper-bundle.min.css"
    ).then(() => console.log("Ok"));


  }, []);
  const { url, id } = useSelector((state: RootState) => state.router.route);
  console.log(url, id);
  switch (url) {
    default:
      return <Landing />;
      return <SlideListScreen />;
    case "/details":
      return <SlideDetailsScreen id={id} />;
  }
};
