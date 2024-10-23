import {
  Controller,
  Get,
} from '@nestjs/common';
import hoursOfOperation from './hours_of_operation.json';

@Controller('hours_of_operation')
export class HoursOfOperationController {
  constructor() {}

  @Get('')
  getHoursOfOperation() {
    return hoursOfOperation;
  }
}
