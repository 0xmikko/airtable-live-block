import React, { useEffect, useState } from "react";
import {
  BlockLandingData,
} from "../../core/block";
import {TestimonialsBlock} from "./TestimonialsBlock";


// Render Block from json
export const TestimonialBlockLanding: React.FC<BlockLandingData> = ({
  json,
}) => {
  const data = JSON.parse(json);
  return <TestimonialsBlock data={data} />;
};
