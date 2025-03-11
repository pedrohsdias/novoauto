import { Body, Controller, Param, Post, Put } from '@nestjs/common';

import { ApiTags } from '@nestjs/swagger';
import { ContatoEntity } from '../entity/contato.entity';
import { ContatosService } from '../service/contatos.service';
import { BaseCrudController } from '../../base/baseCrud.controller';
import { CreateCotantoDto } from '../dto/createContato.dto';
import { UpdateCotantoDto } from '../dto/updateContato.dto';

@ApiTags('Contato')
@Controller('contatos')
export class ContatosController extends BaseCrudController<ContatoEntity> {
  constructor(protected readonly baseService: ContatosService) {
    super(baseService);
  }
  @Post()
  async create(@Body() createDto: CreateCotantoDto): Promise<ContatoEntity> {
    return super.create(createDto);
  }
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateDto: UpdateCotantoDto,
  ): Promise<ContatoEntity> {
    return super.update(id, updateDto);
  }
}
