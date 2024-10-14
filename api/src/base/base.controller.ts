import {
  Get,
  Param,
  Post,
  Body,
  Delete,
  Controller,
  Put,
} from '@nestjs/common';
import { BaseEntity } from './base.entity';
import { BaseService } from './base.service';
import { BaseDto } from './base.dto';
import { ApiBearerAuth } from '@nestjs/swagger';

@ApiBearerAuth()
@Controller()
export class BaseController<T extends BaseEntity> {
  constructor(protected readonly service: BaseService<T>) {}

  @Get()
  async findAll(): Promise<T[]> {
    return this.service.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<T | null> {
    return this.service.findById(id);
  }

  @Post()
  async create(@Body() createDto: BaseDto): Promise<T> {
    return this.service.create(createDto);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateDto: BaseDto,
  ): Promise<T> {
    return this.service.update(id, updateDto);
  }
  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    await this.service.delete(id);
  }
}
