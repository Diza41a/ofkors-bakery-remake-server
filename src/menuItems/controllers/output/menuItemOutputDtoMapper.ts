import { MenuItemDocument } from "../../repositories/menuItem";
import { MenuItemOutputDto } from "./menuItemOutputDto";

export class MenuItemOutputDtoMapper {
  map(menuItemDocument: MenuItemDocument): MenuItemOutputDto {
    const menuItemOutputDto = new MenuItemOutputDto(
      menuItemDocument._id.toString(),
      menuItemDocument.name,
      menuItemDocument.description,
      menuItemDocument.category,
      menuItemDocument.price,
    );
    return menuItemOutputDto;
  }
}
