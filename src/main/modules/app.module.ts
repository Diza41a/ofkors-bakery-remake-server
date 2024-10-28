import { Module } from '@nestjs/common';
import { AuthModule } from '../../auth/modules/auth.module';
import { MenuItemModule } from '../../menuItems/menuItem.module';
import { HoursOfOperationModule } from '../../hours/hours.module';

@Module({
  imports: [AuthModule, MenuItemModule, HoursOfOperationModule],
})
export class AppModule {}
