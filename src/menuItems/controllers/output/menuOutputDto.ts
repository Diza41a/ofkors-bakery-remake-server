import type { MenuCategory } from "../../repositories/menuItem";
import { MenuItemOutputDto } from "./menuItemOutputDto";

export class MenuOutputDto {
  category: MenuCategory;
  items: Array<MenuItemOutputDto>;

  constructor(
    category: MenuCategory,
    items: Array<MenuItemOutputDto>,
  ) {
    this.category = category;
    this.items = items;
  }
}
