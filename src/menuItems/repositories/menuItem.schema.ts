import * as mongoose from 'mongoose';

const {
  Schema,
  Schema: { ObjectId },
} = mongoose;

const COLLECTION_NAME = 'MenuItems';

const TranslatedFieldSchema = new Schema({
  en: { type: String, required: true },
  ru: { type: String, required: true },
  uk: { type: String, required: true },
}, { _id: false });

export const MenuItemSchema = new Schema({
  id: ObjectId,
  name: TranslatedFieldSchema,
  description: TranslatedFieldSchema,
  category: {
    type: String,
    enum: ['coffee_and_drinks', 'baked_goods', 'breakfast_and_lunch', 'desserts'],
    required: true
  },
  price: { type: Number, required: true },
}, { collection: COLLECTION_NAME });
