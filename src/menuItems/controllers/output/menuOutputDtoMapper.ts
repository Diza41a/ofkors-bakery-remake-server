import type { MenuCategory } from "../../repositories/menuItem";
import { MenuItemOutputDto } from "./menuItemOutputDto";
import { MenuOutputDto } from "./menuOutputDto";

export class MenuOutputDtoMapper {
  map(category: MenuCategory, menuItemOutputDtos: Array<MenuItemOutputDto>): MenuOutputDto {
    const menuItemOutputDto = new MenuOutputDto(
      category,
      menuItemOutputDtos,
    );
    return menuItemOutputDto;
  }
}
