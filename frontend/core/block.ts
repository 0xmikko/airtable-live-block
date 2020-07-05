import React from "react";
import { Record as AIRecord } from "@airtable/blocks/models";
import { HeroBlockTable } from "../components/Hero/HeroBlockTable";
import { ClientLogoBlockTable } from "../components/ClientLogo/ClientLogoBlockTable";
import { CounterBlockTable } from "../components/Counter/CounterBlockTable";
import { ServiceBlockTable } from "../components/Service/ServiceBlockTable";
import { FeatureBlockTable } from "../components/Features/FeaturesBlockTable";
import { TestimonialsBlockTable } from "../components/Testimonials/TestimonialsBlockTable";
import { FooterBlockTable } from "../components/Footer/FooterBlockTable";
import {NullBlockTable} from "../components/NullBlock/NullBlockTable";

export type BlockType =
  | "Hero"
  | "Clients"
  | "Counter"
  | "Services"
  | "Features"
  | "Testimonials"
  | "Footer"
  | "NULL"  ;

export interface BlockRender {
  blockTable: React.FC<Block>;
  renderInSection: boolean;
}

export const LandingsBlocks: Record<BlockType, BlockRender> = {
  Hero: { blockTable: HeroBlockTable, renderInSection: false },
  Clients: { blockTable: ClientLogoBlockTable, renderInSection: true },
  Counter: { blockTable: CounterBlockTable, renderInSection: true },
  Services: { blockTable: ServiceBlockTable, renderInSection: true },
  Features: { blockTable: FeatureBlockTable, renderInSection: true },
  Testimonials: { blockTable: TestimonialsBlockTable, renderInSection: true },
  Footer: { blockTable: FooterBlockTable, renderInSection: false },
  NULL : { blockTable: NullBlockTable, renderInSection: false}
};

export class Block {
  type: BlockType;
  tableId: string;

  showInMenu: boolean;
  menuTitle?: string;

  index: number;

  subtitle?: string;
  title?: string;
  desc?: string;

  constructor(record: AIRecord) {
    const type = (record.getCellValue("BlockType") as {name: string});
    if (type === null || LandingsBlocks[type.name as BlockType] === undefined) {
      this.type = 'NULL';
      this.title = type === null ? "Empty field" : type.name;
      return
    }
    this.type = type.name as BlockType;
    console.log("RCDDD",record);
    this.showInMenu = record.getCellValueAsString("Menu") !== "";
    this.menuTitle = record.getCellValueAsString("Menu")
    this.subtitle = record.getCellValueAsString("Subtitle")
    this.title = record.getCellValueAsString("Title")
    this.desc = record.getCellValueAsString("Description")
  }

}

export function getSectionId(b: Block): string {
  return b.menuTitle === undefined
    ? ""
    : b.menuTitle.toLowerCase().replace(" ", "_");
}
