import { Module } from '@nestjs/common';
import { MenuItemModule } from '../../menuItems/menuItem.module';

@Module({
  imports: [MenuItemModule],
})
export class AppModule {}
