import React, {useState} from "react";
import { NavbarPage } from "../../components/Navbar/Navbar";
import { Block } from "../../core/block";
import {LandingBlockFactory } from "../../components/BlockFactory/LandingBlockFactoryProps";
import { useBase, useRecords} from "@airtable/blocks/ui";

export const LandingAirTable: React.FC = () => {
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

      <NavbarPage data={blocks} />
      <LandingBlockFactory data={blocks} />
    </div>
  );
};
