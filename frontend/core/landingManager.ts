import { Block } from "./block";
import { MenuItem } from "./menuItem";

export class LandingManager {
  private _blocks: Block[];

  constructor(blocks: Block[]) {
    this._blocks = blocks;
  }

  get navItems(): MenuItem[] {
    return this._blocks
      .filter((block) => block.showInMenu)
      .map((block) => ({
        id: block.index,
        menuHref: LandingManager.getSectionId(block),
        menuTitle: block.menuTitle,
      }));
  }

  static getSectionId(block: Block) {
      return block.menuTitle.toLowerCase().replace(" ", "_");
  }
}
