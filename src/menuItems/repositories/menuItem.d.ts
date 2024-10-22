import { Document } from "mongoose";

export type TranslatedField = {
  en: string;
  ru: string;
  uk: string;
}
export type MenuCategory = 'coffee_and_drinks' | 'baked_goods' | 'breakfast_and_lunch' | 'desserts';

export interface MenuItemDocument extends Document {
  name: TranslatedField;
  description: TranslatedField;
  category: MenuCategory;
  price: number;
};
