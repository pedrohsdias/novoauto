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
import { BaseModelDto } from './dto/baseModel.dto';
import { ApiBearerAuth, ApiOkResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from '../guard/guard';
import { BaseFindAllDto } from './dto/baseFindAll.dto';
import { ApiResponseDto } from './dto/apiResponse.dto';

@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@Controller()
export class BaseAuxController<T extends BaseEntity> {
  constructor(protected readonly service: BaseService<T>) {
  }

  @Get()
  @ApiOkResponse({
    description: 'Lista de itens retornados com metadados',
    type: ApiResponseDto,
    isArray: false,
  })
  async findAll(@Query() query: BaseFindAllDto): Promise<T[]> {
    const { rowsPerPage = 10, page = 0, orderBy, order = 'asc' } = query;

    return await this.service.findAll({
      rowsPerPage: Number(rowsPerPage),
      page: Number(page),
      orderBy: orderBy || undefined,
      order: order as 'asc' | 'desc',
    });
  }
}
