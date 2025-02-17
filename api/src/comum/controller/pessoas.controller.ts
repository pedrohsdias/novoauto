import { Body, Controller, Param, Post, Put } from '@nestjs/common';
import { BaseCrudController } from '../../base/baseCrud.controller';
import {
  CreateBlocoDto,
  UpdateBlocoDto,
} from '../../template-modelo-vistoria/dto/bloco.dto';
import { PessoasService } from '../service/pessoas.service';
import { PessoaEntity } from '../entity/pessoa.entity';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('Pessoa')
@Controller('pessoas')
export class PessoasController extends BaseCrudController<PessoaEntity> {
  constructor(protected readonly baseService: PessoasService) {
    super(baseService);
  }
  @Post()
  async create(@Body() createDto: CreateBlocoDto): Promise<PessoaEntity> {
    return super.create(createDto);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateDto: UpdateBlocoDto,
  ): Promise<PessoaEntity> {
    return super.update(id, updateDto);
  }
}
