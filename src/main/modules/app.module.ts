import { Module } from '@nestjs/common';
import { AuthModule } from 'src/auth/modules/auth.module';
import { MenuItemModule } from '../../menuItems/menuItem.module';

@Module({
  imports: [AuthModule, MenuItemModule],
})
export class AppModule {}
