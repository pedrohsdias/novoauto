import {
  Get,
  Controller,
  UseGuards,
  Query,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { BaseEntity } from './base.entity';
import { BaseService } from './base.service';
import { ApiBearerAuth, ApiOkResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from '../guard/guard';
import { ApiResponseDto } from './dto/apiResponse.dto';
import { ApiResponsePaginatedDto } from './dto/apiResponsePaginated.dto';
import { createError, createPaginatedResponse } from './util/responses.util';
import { RequestAutoCompleteDto } from '../comum/dto/requests/requestAutoComplete.dto';

@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@Controller()
export class BaseAuxController<T extends BaseEntity> {
  constructor(protected readonly service: BaseService<T>) {}

  @Get()
  @ApiOkResponse({
    description: 'Lista de itens retornados com metadados',
    type: ApiResponsePaginatedDto,
    isArray: false,
  })
  async autocomplete(
    @Query() query: RequestAutoCompleteDto,
  ): Promise<ApiResponseDto<T[]>> {
    try {
      const response = await this.service.autoComplete(query);

      return createPaginatedResponse(response);
    } catch (error) {
      throw new HttpException(
        createError(error),
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
