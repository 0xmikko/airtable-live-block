import React, {useState} from "react";
import { NavbarPage } from "../../components/Navbar/Navbar";
import { Block } from "../../core/block";
import { LandingBlockFactory } from "../../components/Block/LandingBlockFactory";
import { useBase, useRecords} from "@airtable/blocks/ui";
import {LandingSchemaItem} from "../../containers/LandingSchemaItem";

export const LandingSchema: React.FC = () => {
  const base = useBase();
  const table = base.getTableByNameIfExists("Schema");

  const view = table.getViewByName('Grid view');
  const queryResult = view.selectRecords();
  const records = useRecords(queryResult);

  const blocks = records
    .filter((r) => r !== null)
    .map((record) => new Block(record));

  return (
    <div>
      { blocks.map(block => <LandingSchemaItem data={block}  />)}
    </div>
  );
};
