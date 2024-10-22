import { Module } from '@nestjs/common';
import { DatabaseModule } from '../main/modules/database.module';
import { MenuItemsController } from './controllers/menuItems.controller';
import { menuItemProviders } from './menuItem.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [MenuItemsController],
  providers: [...menuItemProviders],
})
export class MenuItemModule {}
