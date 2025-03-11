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
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { BaseEntity } from './base.entity';
import { BaseService } from './base.service';
import { BaseModelDto } from './dto/baseModel.dto';
import {
  ApiBearerAuth,
  ApiInternalServerErrorResponse,
  ApiOkResponse,
} from '@nestjs/swagger';
import { JwtAuthGuard } from '../guard/guard';
import { BaseRequestFindAllDto } from './dto/baseRequestFindAll.dto';
import { ApiResponseDto } from './dto/apiResponse.dto';
import { ApiResponsePaginatedDto } from './dto/apiResponsePaginated.dto';
import { createError, createPaginatedResponse } from './util/responses.util';

@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@Controller()
export class BaseCrudController<T extends BaseEntity> {
  constructor(protected readonly service: BaseService<T>) {}

  @Get()
  @ApiOkResponse({
    description: 'Lista de itens retornados com metadados',
    type: ApiResponsePaginatedDto,
    isArray: false,
  })
  @ApiInternalServerErrorResponse({
    type: ApiResponseDto,
    isArray: false,
  })
  async findAll(
    @Query() query: BaseRequestFindAllDto,
  ): Promise<ApiResponseDto<T[]>> {
    const { rowsPerPage = 20, page = 1, orderBy, order = 'ASC' } = query;
    // try {
    const response = await this.service.findAll({
      rowsPerPage: Number(rowsPerPage),
      page: Number(page),
      orderBy: orderBy || undefined,
      order: order as 'asc' | 'desc',
    });

    return createPaginatedResponse(response, page);
    // } catch (error) {
    //   throw new HttpException(
    //     createError(error),
    //     HttpStatus.INTERNAL_SERVER_ERROR,
    //   );
    // }
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<T | null> {
    return this.service.findById(id);
  }

  @Post()
  async create(@Body() createDto: BaseModelDto): Promise<T> {
    return this.service.create(createDto);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateDto: BaseModelDto,
  ): Promise<T> {
    return this.service.update(id, updateDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    await this.service.delete(id);
  }

  private delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
