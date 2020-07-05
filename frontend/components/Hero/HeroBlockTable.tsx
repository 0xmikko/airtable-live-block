import React from "react";
import { Hero } from "../../core/hero";
import { HeroBlock } from "./HeroBlock";
import { useBase, useGlobalConfig, useRecords } from "@airtable/blocks/ui";
import { RecordMatcher } from "../../core/recordExtractor";
import { Block } from "../../core/block";

export const HeroBlockTable: React.FC<Block> = ({ id }) => {
  // const hero : Hero = {
  //   image: "https://storage.googleapis.com/airtable-live/bg.jpg",
  //   subtitle: "Create landings & mobile apps in few minutes",
  //   title: "AirTable Live - nocode platform for SME",
  //   desc: "AirTableLive is nocode platform especially deisnged for SME"
  //
  // }



  const hero = records.map((r) => new Hero(r, recordMatcher))[0];

  return <HeroBlock data={hero} />;
};
