import { Inject } from "@nestjs/common";
import { MenuItemInputDto } from "./menuItemInputDto";
import { MenuItemDocument } from "../../repositories/menuItem";
import { Model } from "mongoose";

export class MenuItemInputDtoMapper {
  constructor(
    @Inject('MENU_ITEMS_MODEL')
    private menuItemModel: Model<MenuItemDocument>,
  ) {}

  map(menuItemInputDto: MenuItemInputDto): MenuItemDocument {
    const menuItemDocument = new this.menuItemModel({
      name: menuItemInputDto.name,
      description: menuItemInputDto.description,
      category: menuItemInputDto.category,
      price: menuItemInputDto.price,
    });
    return menuItemDocument;
  }
}
