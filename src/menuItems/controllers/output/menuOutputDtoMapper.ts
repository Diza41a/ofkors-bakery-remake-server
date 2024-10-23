import type { MenuCategoryEn } from "../../repositories/menuItem";
import { MenuItemOutputDto } from "./menuItemOutputDto";
import { MenuOutputDto } from "./menuOutputDto";

export class MenuOutputDtoMapper {
  map(category: MenuCategoryEn, menuItemDocuments: Array<MenuItemOutputDto>): MenuOutputDto {
    const menuItemOutputDto = new MenuOutputDto(
      category,
      menuItemDocuments,
    );
    return menuItemOutputDto;
  }
}
