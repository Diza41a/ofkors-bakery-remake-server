import {
  Body,
  Controller,
  Get,
  Put,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '../auth/services/auth.guard';
import hoursOfOperation from './hours_of_operation.json';

const fs = require('fs');
const path = require('path');

@Controller('hours_of_operation')
export class HoursOfOperationController {
  constructor() {}

  @Get('')
  get() {
    return hoursOfOperation;
  }

  @UseGuards(AuthGuard)
  @Put('')
  update(@Body() updatedHours) {
    try {
      const pathname = path.join(__dirname, '../../src/hours/hours_of_operation.json');
      fs.writeFileSync(pathname, JSON.stringify(updatedHours, null, 2));
      console.log('Hours of operation updated successfully');
      return updatedHours;
    }
    catch (error) {
      console.log(`Error writing hours of operation to file: ${error.message}`);
      throw new Error(`Error writing hours of operation to file: ${error.message}`);
    }
  }
}
