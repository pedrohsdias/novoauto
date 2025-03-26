import { Body, Controller, Param, Post, Put } from '@nestjs/common';

import { ApiTags } from '@nestjs/swagger';
import { ContatoEntity } from '../entity/contato.entity';
import { ContatosService } from '../service/contatos.service';
import { BaseCrudController } from '../../base/baseCrud.controller';
import {
  CreateContatoDto,
  UpdateContatoDto,
} from '../dto/requests/requestsContato.dto';
import { ApiResponseDto } from '../../base/dto/apiResponse.dto';

@ApiTags('Contato')
@Controller('contatos')
export class ContatosController extends BaseCrudController<
  ContatoEntity,
  CreateContatoDto,
  UpdateContatoDto
> {
  constructor(protected readonly baseService: ContatosService) {
    super(baseService);
  }

  @Post()
  async create(
    @Body() createDto: CreateContatoDto,
  ): Promise<ApiResponseDto<ContatoEntity>> {
    return super.create(createDto);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateDto: UpdateContatoDto,
  ): Promise<ApiResponseDto<ContatoEntity>> {
    return super.update(id, updateDto);
  }
}
