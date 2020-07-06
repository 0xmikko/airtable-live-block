import React from "react";
import { useDispatch } from "react-redux";
import { Block } from "../core/block";
import { Button } from "@airtable/blocks/ui";
import actions from "../store/actions";
import { BlockInfo } from "../components/BlockInfo";

interface LandingSchemaItemProps {
  data: Block;
}
export const LandingSchemaItem: React.FC<LandingSchemaItemProps> = ({
  data,
}) => {
  const dispatch = useDispatch();

  return (
    <BlockInfo type={data.type}>
      <Button
        onClick={() => {
          dispatch(
            actions.router.navigate({
              url: "/schema",
              id: data.id,
              options: { type: data.type },
            })
          );
        }}
      >
        Schema
      </Button>
    </BlockInfo>
  );
};
