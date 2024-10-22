import type { MenuCategory, TranslatedField } from "../../repositories/menuItem";

export class MenuItemOutputDto {
  id: string;
  name: TranslatedField;
  description: TranslatedField;
  category: MenuCategory;
  price: number;

  constructor(
    id: string,
    name: TranslatedField,
    description: TranslatedField,
    category: MenuCategory,
    price: number,
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.category = category;
    this.price = price;
  }
}