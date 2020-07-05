import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, Heading, SelectButtons } from "@airtable/blocks/ui";

import actions from "../store/actions";
import { RootState } from "../store";

export function AppBar() {
  const options = [
    { value: "/", label: "Landing" },
    { value: "/schema", label: "Schema" },
    { value: "/list", label: "Setting" },
    { value: "/details", label: "Publish" },
  ];

  const dispatch = useDispatch();
  const { url, id } = useSelector((state: RootState) => state.router.route);

  console.log("URL", url);

  return (
    <Box
      top={0}
      left={0}
      right={0}
      bottom={0}
      display="flex"
      flexDirection="row"
      alignContent="center"
      alignItems="center"
      justifyContent="space-between"
      width={"100%"}
      paddingLeft={"20px"}
      paddingRight={"20px"}
      paddingTop={"8px"}
      paddingBottom={"8px"}
      backgroundColor={"#8ca5ff"}
    >
      <Heading size={"xsmall"}>AirLive</Heading>
      <Box height={'auto'}>
        <SelectButtons
          value={url}
          onChange={(newValue) =>
            dispatch(actions.router.navigate({ url: newValue }))
          }
          options={options}
          width="320px"
          style={{height: 'auto'}}
        />
      </Box>
    </Box>
  );
}
