import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { MenuItemsService } from '../menuItems.service';
import { MenuItemOutputDto } from './output/menuItemOutputDto';
import { MenuItemInputDto } from './input/menuItemInputDto';

@Controller('menu_items')
export class MenuItemsController {
  constructor(private readonly menuItemsService: MenuItemsService) {}

  @Get('')
  getAll(): Promise<Array<MenuItemOutputDto>> {
    return this.menuItemsService.getAll();
  }

  @Get('/:id')
  getById(@Param('id') id: string): Promise<MenuItemOutputDto | null> {
    return this.menuItemsService.getById(id);
  }

  @Post('')
  create(
    @Body() menuItemInputDto: MenuItemInputDto,
  ): Promise<MenuItemOutputDto> {
    return this.menuItemsService.create(menuItemInputDto);
  }

  @Put('/:id')
  update(
    @Param('id') id: string,
    @Body() menuItemInputDto: MenuItemInputDto,
  ): Promise<MenuItemOutputDto | null> {
    return this.menuItemsService.update(id, menuItemInputDto);
  }

  @Delete('/:id')
  delete(@Param('id') id: string): Promise<MenuItemOutputDto | null> {
    return this.menuItemsService.delete(id);
  }
}
