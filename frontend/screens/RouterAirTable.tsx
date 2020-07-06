import React from "react";
import { useSelector } from "react-redux";
import { Box } from "@airtable/blocks/ui";
import { RootState } from "../store";

import { SlideDetailsScreen } from "./Slides/SlideDetailsScreen";
import { SlideListScreen } from "./Slides/SlideListScreen";
import { AppBar } from "../components/AppBar";
import { LandingAirTable } from "./Landing/LandingAirTable";
import { SchemaEditor } from "./Schema/SchemaEditor";
import { LandingSchema } from "./Schema/LandingSchema";
import { BlockType } from "../core/block";
import {PublishScreen} from "./Publish/PublishScreen";

export const RouterAirTable: React.FC = () => {
  const { url, id, options } = useSelector(
    (state: RootState) => state.router.route
  );

  console.log(url, id);
  let screen: React.ReactElement;
  switch (url) {
    case "/":
      screen = <LandingAirTable />;
      break;

    default:
    case "/schema":
      screen = <LandingSchema />;
      if (id!== undefined && options !== undefined) {
        const type = (options as { type: BlockType }).type;
        if (type === undefined) return <>"Internal error"</>;
        screen = <SchemaEditor id={id} type={type} />;
      }
      break;

    case "/publish":
      screen = <PublishScreen />
      break;

  }

  return (
    <>
      <Box
        position="absolute"
        top={"0px"}
        left={0}
        right={0}
        bottom={0}
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        justifyContent="space-between"
        width={"100%"}
        overflowY={"hidden"}
      >
        <AppBar />
      </Box>
      <Box
        position="absolute"
        top={"50px"}
        left={0}
        right={0}
        bottom={0}
        display="flex"
        flexDirection="column"
        width={"100%"}
        overflowY={"scroll"}
      >
        {screen}
      </Box>
    </>
  );
};
