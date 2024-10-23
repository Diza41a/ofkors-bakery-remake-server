import { Document } from "mongoose";

export type TranslatedField = {
  en: string;
  ru: string;
  uk: string;
}
export type MenuCategoryEn = 'coffee_and_drinks' | 'baked_goods' | 'breakfast_and_lunch' | 'desserts';
export type MenuCategory = {
  en: MenuCategoryEn;
  ru: string;
  uk: string;
};

export interface MenuItemDocument extends Document {
  name: TranslatedField;
  description: TranslatedField;
  category: MenuCategory;
  price: number;
};
