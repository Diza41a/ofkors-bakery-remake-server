import { Connection } from 'mongoose';
import { MenuItemSchema } from './repositories/menuItem.schema';
import { MenuItemRepository } from './repositories/menuItem.repository';
import { MenuItemsService } from './menuItems.service';
import { MenuItemOutputDtoMapper } from './controllers/output/menuItemOutputDtoMapper';
import { MenuItemInputDtoMapper } from './controllers/input/menuItemInputDtoMapper';

export const menuItemProviders = [
  {
    provide: 'MENU_ITEMS_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('MenuItems', MenuItemSchema),
    inject: ['DATABASE_CONNECTION'],
  },
  MenuItemOutputDtoMapper,
  MenuItemInputDtoMapper,
  MenuItemRepository,
  MenuItemsService,
];
