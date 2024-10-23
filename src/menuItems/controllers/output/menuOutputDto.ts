import type { MenuCategoryEn } from "../../repositories/menuItem";
import { MenuItemOutputDto } from "./menuItemOutputDto";

export class MenuOutputDto {
  category: MenuCategoryEn;
  menuItems: Array<MenuItemOutputDto>;

  constructor(
    category: MenuCategoryEn,
    menuItems: Array<MenuItemOutputDto>,
  ) {
    this.category = category;
    this.menuItems = menuItems;
  }
}
