import type { MenuCategoryEn } from "../../repositories/menuItem";
import { MenuItemOutputDto } from "./menuItemOutputDto";

export class MenuOutputDto {
  category: MenuCategoryEn;
  items: Array<MenuItemOutputDto>;

  constructor(
    category: MenuCategoryEn,
    items: Array<MenuItemOutputDto>,
  ) {
    this.category = category;
    this.items = items;
  }
}
