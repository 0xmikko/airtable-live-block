import React from "react";
import { useSelector } from "react-redux";
import { Box } from "@airtable/blocks/ui";
import { RootState } from "../store";

import { SlideDetailsScreen } from "./Slides/SlideDetailsScreen";
import { SlideListScreen } from "./Slides/SlideListScreen";
import { AppBar } from "../components/AppBar";
import { LandingPage } from "./Landing/LandingPage";
import { SchemaEditor } from "./SchemaEditor/SchemaEditor";
import { LandingSchema } from "./Landing/LandingSchema";
import { BlockType } from "../core/block";

export const Router: React.FC = () => {
  const { url, id, options } = useSelector(
    (state: RootState) => state.router.route
  );

  console.log(url, id);
  let screen: React.ReactElement;
  switch (url) {
    case "/":
      screen = <LandingPage />;
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

    case "/list":
      screen = <SlideListScreen />;
      break;
    case "/details":
      screen = <SlideDetailsScreen id={id} />;
      return;
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
