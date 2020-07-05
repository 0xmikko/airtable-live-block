import React from "react";
import { Feature } from "../../core/feature";
import { Block } from "../../core/block";
import { FeatureBlock } from "./FeaturesBlock";

export const FeatureBlockTable: React.FC<Block> = ({ tableId }) => {
  const data: Feature[] = [
    {
      image: "https://storage.googleapis.com/airtable-live/features/img-1.png",
      icon: "pie-chart",
      title: "Increase your Marketing Performance",
      smallFeatures: [
        { title: "Donec quam felis" },
        { title: "Ultricies nec" },
      ],
      desc:
        "If several languages coalesce, the grammar of the resulting language is more simple and regular.",
    },
  ];
  return <FeatureBlock data={data} />;
};
