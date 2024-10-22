import type { MenuCategory, TranslatedField } from "../../repositories/menuItem"

export class MenuItemInputDto {
  name: TranslatedField;
  description: TranslatedField;
  category: MenuCategory;
  price: number;

  constructor(
    name: TranslatedField,
    description: TranslatedField,
    category: MenuCategory,
    price: number,
  ) {
    this.name = name;
    this.description = description;
    this.category = category;
    this.price = price;
  }
}