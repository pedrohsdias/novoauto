import {
  Get,
  Param,
  Post,
  Body,
  Delete,
  Controller,
  Put,
  UseGuards,
  Query,
} from '@nestjs/common';
import { BaseEntity } from './base.entity';
import { BaseService } from './base.service';
import { BaseDto } from './base.dto';
import { ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from '../guard/guard';

@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@Controller()
export class BaseController<T extends BaseEntity> {
  constructor(protected readonly service: BaseService<T>) {}

  @Get()
  async findAll(
    @Query('rowsPerPage') rowsPerPage: number = 10,
    @Query('page') page: number = 0,
    @Query('orderBy') orderBy: string = '',
    @Query('order') order: 'asc' | 'desc' = 'asc',
  ): Promise<T[]> {
    return this.service.findAll({
      rowsPerPage: rowsPerPage ? Number(rowsPerPage) : 10,
      page: page ? Number(page) : 0,
      orderBy: orderBy || undefined,
      order: order || 'asc',
    });
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
  private delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}
}
