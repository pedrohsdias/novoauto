import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Inject,
  Param,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../../guard/guard';
import { ApiResponsePaginatedDto } from '../../base/dto/apiResponsePaginated.dto';
import { RequestAutoCompleteDto } from '../../comum/dto/requestAutoComplete.dto';
import { ApiResponseDto } from '../../base/dto/apiResponse.dto';
import { createError, createPaginatedResponse } from '../../base/util/responses.util';
import { QueryDto } from '../dto/CNPJ.dto';
import { IExternalService } from '../interfaces/externalService.interface';
import { BuscaCNPJService } from '../Service/info-simples/buscaCNPJ.service';

@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@ApiTags('Servicos externos')
@Controller('servico-externo')
export class ServicosExternosController {
  constructor(
    @Inject(BuscaCNPJService) private readonly service: IExternalService // Injeta a implementação correta
  ) {}
  @Get()
  async buscaDadosCNPJ(@Query() query: QueryDto): Promise<string> {
    try {
      console.log(this.service)
      return this.service.fetchData(query)
    }catch (error) {
      throw new HttpException(createError(error), HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

}
