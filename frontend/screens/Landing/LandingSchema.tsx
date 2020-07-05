import React from "react";
import { NavbarPage } from "../../components/Navbar/Navbar";
import { HeroBlockTable } from "../../components/Hero/HeroBlockTable";
import { Block } from "../../core/block";
import { LandingBlockFactory } from "../../components/Block/LandingBlockFactory";
import { useBase, useRecords } from "@airtable/blocks/ui";

const blocks: Block[] = [
  {
    type: "Hero",
    tableId: "",

    showInMenu: false,

    index: 1,
    subtitle: "",
    title: "",
    desc: "",
  },
  {
    type: "Services",
    tableId: "",

    showInMenu: true,
    menuTitle: "Services",

    index: 2,
    subtitle: "Services",
    title: "Services We Provide",
    desc: "It will be as simple as occidental in fact, it will be Occidental.",
  },
  {
    type: "Features",
    tableId: "",

    showInMenu: true,
    menuTitle: "Features",

    index: 3,
    subtitle: "",
    title: "",
    desc: "",
  },

  {
    type: "Counter",
    tableId: "",

    showInMenu: false,

    index: 5,
    subtitle: "",
    title: "",
    desc: "",
  },
];

export const Landing: React.FC = () => {
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
