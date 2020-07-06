import { FieldType } from "@airtable/blocks/models";

export interface Entry {
  type: FieldType;
  displayName: string;
}

export type Schema = Record<string, Entry>;
