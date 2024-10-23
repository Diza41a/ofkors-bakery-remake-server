import { Module } from '@nestjs/common';
import { HoursOfOperationController } from './hours.controller';

@Module({
  controllers: [HoursOfOperationController],
})
export class HoursOfOperationModule {}
