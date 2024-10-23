import { Model } from 'mongoose';
import { Inject, Injectable } from '@nestjs/common';
import type { MenuCategoryEn, MenuItemDocument } from './menuItem';

@Injectable()
export class MenuItemRepository {
  constructor(
    @Inject('MENU_ITEMS_MODEL')
    private menuItemModel: Model<MenuItemDocument>,
  ) {}

  findAll(): Promise<Array<MenuItemDocument>> {
    const menuItemDocuments = this.menuItemModel.find();

    return menuItemDocuments;
  }

  findByCategory(category: MenuCategoryEn): Promise<Array<MenuItemDocument>> {
    const menuItemDocuments = this.menuItemModel.find({ category });

    return menuItemDocuments;
  }

  findById(id: string): Promise<MenuItemDocument | null> {
    const menuItemDocument = this.menuItemModel.findById(id);

    return menuItemDocument;
  }

  create(menuItem: MenuItemDocument): Promise<MenuItemDocument> {
    const createdMenuItem = new this.menuItemModel(menuItem);

    return createdMenuItem.save();
  }

  update(id: string, updatedMenuItem: MenuItemDocument): Promise<MenuItemDocument | null> {
    const updatedMenuItemDocument = this.menuItemModel.findByIdAndUpdate(id, updatedMenuItem, { new: true });

    return updatedMenuItemDocument;
  }

  delete(id: string): Promise<MenuItemDocument | null> {
    const deletedMenuItemDocument = this.menuItemModel.findByIdAndDelete(id);

    return deletedMenuItemDocument;
  }
}
