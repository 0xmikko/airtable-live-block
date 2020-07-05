import React from "react";
import { Container, Row, Col } from "reactstrap";
import {Hero} from "../../core/hero";
import {HeroBlock} from "./HeroBlock";

interface HeroBlockTableProps {
  tableId: string
}

export const HeroBlockTable: React.FC<HeroBlockTableProps> = ({tableId}) => {
  const hero : Hero = {
    image: "https://storage.googleapis.com/airtable-live/bg.jpg",
    subtitle: "Create landings & mobile apps in few minutes",
    title: "AirTable Live - nocode platform for SME",
    desc: "AirTableLive is nocode platform especially deisnged for SME"

  }

  return <HeroBlock data={hero}/>
};
