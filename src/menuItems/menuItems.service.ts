import { HttpException, Injectable } from '@nestjs/common';
import { MenuItemRepository } from './repositories/menuItem.repository';
import { MenuItemOutputDto } from './controllers/output/menuItemOutputDto';
import { MenuItemOutputDtoMapper } from './controllers/output/menuItemOutputDtoMapper';
import { MenuItemInputDtoMapper } from './controllers/input/menuItemInputDtoMapper';
import { MenuItemInputDto } from './controllers/input/menuItemInputDto';

@Injectable()
export class MenuItemsService {
  constructor(
    private readonly menuItemsRepository: MenuItemRepository,
    private readonly menuItemOutputDtoMapper: MenuItemOutputDtoMapper,
    private readonly menuItemInputDtoMapper: MenuItemInputDtoMapper,
  ) {}

  async getAll(): Promise<Array<MenuItemOutputDto>> {
    const menuItemDocuments = await this.menuItemsRepository.findAll();

    const menuItemOutputDtos = menuItemDocuments.map((menuItemDocument) =>
      this.menuItemOutputDtoMapper.map(menuItemDocument),
    );
    return menuItemOutputDtos;
  }

  async getById(id: string): Promise<MenuItemOutputDto | null> {
    const menuItemDocument = await this.menuItemsRepository.findById(id);
    if (!menuItemDocument) throw new HttpException('Menu item not found', 404);

    const menuItemOutputDto = this.menuItemOutputDtoMapper.map(menuItemDocument);
    return menuItemOutputDto;
  }

  async create(menuItemInputDto: MenuItemInputDto): Promise<MenuItemOutputDto> {
    const menuItemDocument = this.menuItemInputDtoMapper.map(menuItemInputDto);
    const createdMenuItem = await this.menuItemsRepository.create(menuItemDocument);

    const menuItemOutputDto = this.menuItemOutputDtoMapper.map(createdMenuItem);
    return menuItemOutputDto;
  }

  async update(
    id: string,
    menuItemInputDto: MenuItemInputDto,
  ): Promise<MenuItemOutputDto | null> {
    const menuItemDocument = await this.menuItemsRepository.findById(id);
    if (!menuItemDocument) throw new HttpException('Menu item not found', 404);

    menuItemDocument.name = menuItemInputDto.name;
    menuItemDocument.description = menuItemInputDto.description;
    menuItemDocument.category = menuItemInputDto.category;
    menuItemDocument.price = menuItemInputDto.price;

    const updatedMenuItem = await menuItemDocument.save();

    const menuItemOutputDto = this.menuItemOutputDtoMapper.map(updatedMenuItem);
    return menuItemOutputDto;
  }

  async delete(id: string): Promise<MenuItemOutputDto | null> {
    const menuItemDocument = await this.menuItemsRepository.findById(id);
    if (!menuItemDocument) throw new HttpException('Menu item not found', 404);

    await menuItemDocument.deleteOne();

    const menuItemOutputDto = this.menuItemOutputDtoMapper.map(menuItemDocument);
    return menuItemOutputDto;
  }
}
