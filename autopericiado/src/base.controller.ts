import {
  Get,
  Param,
  Post,
  Body,
  Delete,
  Patch,
  Controller,
} from '@nestjs/common';
import { BaseEntity } from './base.entity';
import { BaseService } from './base.service';

@Controller()
export class BaseController<T extends BaseEntity> {
  constructor(protected readonly baseService: BaseService<T>) {}

  @Get()
  async findAll(): Promise<T[]> {
    return this.baseService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: number): Promise<T | null> {
    return this.baseService.findById(id);
  }

  @Post()
  async create(@Body() entity: T): Promise<T> {
    return this.baseService.create(entity);
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() entity: T): Promise<T> {
    const existingEntity = await this.baseService.findById(id);
    if (!existingEntity) {
      throw new Error(`Entity with id ${id} not found`);
    }
    return this.baseService.update(entity);
  }
  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    await this.baseService.delete(id);
  }
}
