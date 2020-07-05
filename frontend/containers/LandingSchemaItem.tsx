import React from "react";
import { useDispatch } from "react-redux";
import { Block } from "../core/block";
import { Button } from "@airtable/blocks/ui";
import actions from "../store/actions";

interface LandingSchemaItemProps {
  data: Block;
}
export const LandingSchemaItem: React.FC<LandingSchemaItemProps> = ({
  data,
}) => {
  const dispatch = useDispatch();

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        fontSize: 18,
        padding: 12,
        borderBottom: "1px solid #ddd",
      }}
    >
      {data.type}
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
      >Schema</Button>
    </div>
  );
};
