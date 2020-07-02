import React from "react";
import { useDispatch} from 'react-redux';
import { Item } from "../core/Item";
import { Box } from "@airtable/blocks/ui";
import actions from "../store/actions";

export interface SlideIconViewProps {
  data?: Item;
}

export const SlideIconView: React.FC<SlideIconViewProps> = ({ data }) => {

  const dispatch = useDispatch();

  const onSelect = (index: number) => dispatch(actions.router.navigate({ url: "/details", id: index.toString() }))

  const content = data === undefined ? <div/> : <div onClick={() => onSelect(data.index)}> <img
      src={data.images[0] || "unknown.jpg"}
      style={{maxHeight: '100%', maxWidth: '100%'}}
  />{data.header}</div>



  return (
    <Box
      width={"16%"}
      maxHeight={"100px"}
      margin={"2%"}
      display={"flex"}
      flexDirection={"column"}
      alignContent={"center"}
      alignItems={"center"}
    >
      {content}
    </Box>
  );
};
