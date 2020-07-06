import React from "react";
import { Record as ATRecord } from "@airtable/blocks/models";
import {heroBlockDataExtractor,  HeroBlockTable} from "../components/Hero/HeroBlockTable";
import {clientLogoBlockDataExtractor, ClientLogoBlockTable} from "../components/ClientLogo/ClientLogoBlockTable";
import {
  counterBlockDataExtractor,
  CounterBlockTable
} from "../components/Counter/CounterBlockTable";
import {
  serviceBlockDataExtractor,
  ServiceBlockTable
} from "../components/Service/ServiceBlockTable";
import {
  featureBlockDataExtractor,
  FeatureBlockTable
} from "../components/Features/FeaturesBlockTable";
import {
  testimonialBlockDataExtractor,
  TestimonialsBlockTable
} from "../components/Testimonials/TestimonialsBlockTable";
import {footerBlockDataExtractor, FooterBlockTable} from "../components/Footer/FooterBlockTable";
import { NullBlockTable } from "../components/NullBlock/NullBlockTable";
import { Schema } from "./schema";
import { RecordMatcher } from "./recordExtractor";
import { HeroSchema } from "./hero";
import { ClientSchema } from "./clientLogo";
import { CounterSchema } from "./counter";
import { FeatureSchema } from "./feature";
import { ServiceSchema } from "./service";
import { TestimonialSchema } from "./testimonial";
import { FooterSchema } from "./footer";
import {ClientLogoBlockLanding} from "../components/ClientLogo/ClientLogoBlockLanding";
import {CounterBlockLanding} from "../components/Counter/CoutnerBlockLanding";
import {HeroBlockLanding} from "../components/Hero/HeroBlockLanding";
import {ServiceBlockLanding} from "../components/Service/ServiceBlockLanding";
import {TestimonialBlockLanding} from "../components/Testimonials/TestimonialBlockLanding";

export type BlockType =
  | "Hero"
  | "Clients"
  | "Counter"
  | "Services"
  | "Features"
  | "Testimonials"
  | "Footer"
  | "NULL";

export interface BlockRender {
  blockTable: React.FC<BlockTableData>;
  blockLanding?: React.FC<BlockLandingData>;
  renderInSection: boolean;
  schema?: Schema;
  extractor?: (records : ATRecord[], matcher: RecordMatcher) => object[];
}

export const LandingsBlocks: Record<BlockType, BlockRender> = {
  Hero: {
    blockTable: HeroBlockTable,
    blockLanding: HeroBlockLanding,
    renderInSection: false,
    schema: HeroSchema,
    extractor: heroBlockDataExtractor,
  },
  Clients: {
    blockTable: ClientLogoBlockTable,
    blockLanding: ClientLogoBlockLanding,
    renderInSection: true,
    schema: ClientSchema,
    extractor: clientLogoBlockDataExtractor,
  },
  Counter: {
    blockTable: CounterBlockTable,
    blockLanding: CounterBlockLanding,
    renderInSection: true,
    schema: CounterSchema,
    extractor: counterBlockDataExtractor,
  },
  Services: {
    blockTable: ServiceBlockTable,
    blockLanding: ServiceBlockLanding,
    renderInSection: true,
    schema: ServiceSchema,
    extractor: serviceBlockDataExtractor
  },
  Features: {
    blockTable: FeatureBlockTable,
    blockLanding: ServiceBlockLanding,
    renderInSection: true,
    schema: FeatureSchema,
    extractor: featureBlockDataExtractor,
  },
  Testimonials: {
    blockTable: TestimonialsBlockTable,
    blockLanding: TestimonialBlockLanding,
    renderInSection: true,
    schema: TestimonialSchema,
    extractor: testimonialBlockDataExtractor,
  },
  Footer: {
    blockTable: FooterBlockTable,
    blockLanding: TestimonialBlockLanding,
    renderInSection: false,
    schema: FooterSchema,
    extractor: footerBlockDataExtractor,
  },
  NULL: { blockTable: NullBlockTable, renderInSection: false },
};

export class Block {
  id: string;
  type: BlockType;
  tableId: string;

  showInMenu: boolean;
  menuTitle?: string;

  index: number;

  subtitle?: string;
  title?: string;
  desc?: string;

  constructor(record: ATRecord) {
    this.id = record.id;
    const type = record.getCellValue("BlockType") as { name: string };
    if (type === null || LandingsBlocks[type.name as BlockType] === undefined) {
      this.type = "NULL";
      this.title = type === null ? "Empty field" : type.name;
      return;
    }
    this.type = type.name as BlockType;
    this.showInMenu = record.getCellValueAsString("Menu") !== "";
    this.menuTitle = record.getCellValueAsString("Menu");
    this.subtitle = record.getCellValueAsString("Subtitle");
    this.title = record.getCellValueAsString("Title");
    this.desc = record.getCellValueAsString("Description");
  }
}

export function getSectionId(b: Block): string {
  return b.menuTitle === undefined
    ? ""
    : b.menuTitle.toLowerCase().replace(" ", "_");
}

export interface BlockTableData {
  records: ATRecord[];
  matcher: RecordMatcher;
}

export interface BlockLandingData {
  json: string
}

export interface BlockTableUploader extends BlockTableData{
  id: string,
  bundleName: string,
  index: number,
  startUpload: boolean,
  uploadDone?: () => void
}
