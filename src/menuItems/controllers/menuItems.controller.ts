import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '../../auth/services/auth.guard';
import { MenuItemsService } from '../menuItems.service';
import { MenuItemOutputDto } from './output/menuItemOutputDto';
import { MenuItemInputDto } from './input/menuItemInputDto';
import { MenuOutputDto } from './output/menuOutputDto';

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

  @Get('/menus')
  getMenus(): Promise<Array<MenuOutputDto>> {
    return this.menuItemsService.aggregateMenus();
  }

  @UseGuards(AuthGuard)
  @Post('')
  create(
    @Body() menuItemInputDto: MenuItemInputDto,
  ): Promise<MenuItemOutputDto> {
    return this.menuItemsService.create(menuItemInputDto);
  }

  @UseGuards(AuthGuard)
  @Put('/:id')
  update(
    @Param('id') id: string,
    @Body() menuItemInputDto: MenuItemInputDto,
  ): Promise<MenuItemOutputDto | null> {
    return this.menuItemsService.update(id, menuItemInputDto);
  }

  @UseGuards(AuthGuard)
  @Delete('/:id')
  delete(@Param('id') id: string): Promise<MenuItemOutputDto | null> {
    return this.menuItemsService.delete(id);
  }
}
