import {
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  Controller,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { BaseService } from './base.service';
import { BaseEntity } from './base.entity';

@Controller()
export class BaseController<T extends BaseEntity> {
  constructor(private readonly baseService: BaseService<T>) {}

  @Get()
  async findAll(): Promise<T[]> {
    return this.baseService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<T> {
    const entity = await this.baseService.findOne(id);
    if (!entity) {
      throw new HttpException('Entity not found', HttpStatus.NOT_FOUND);
    }
    return entity;
  }

  @Post()
  async create(@Body() data: Partial<T>): Promise<T> {
    return this.baseService.create(data);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() data: Partial<T>): Promise<T> {
    const updatedEntity = await this.baseService.update(id, data);
    if (!updatedEntity) {
      throw new HttpException('Entity not found', HttpStatus.NOT_FOUND);
    }
    return updatedEntity;
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    const deleted = await this.baseService.delete(id);
    if (!deleted) {
      throw new HttpException('Entity not found', HttpStatus.NOT_FOUND);
    }
  }

  @Put(':id/restore')
  async restore(@Param('id') id: number): Promise<void> {
    const restored = await this.baseService.restore(id);
    if (!restored) {
      throw new HttpException('Entity not found', HttpStatus.NOT_FOUND);
    }
  }
}
