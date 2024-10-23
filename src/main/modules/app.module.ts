import { Module } from '@nestjs/common';
import { AuthModule } from 'src/auth/modules/auth.module';
import { MenuItemModule } from '../../menuItems/menuItem.module';
import { HoursOfOperationModule } from 'src/hours/hours.module';

@Module({
  imports: [AuthModule, MenuItemModule, HoursOfOperationModule],
})
export class AppModule {}
