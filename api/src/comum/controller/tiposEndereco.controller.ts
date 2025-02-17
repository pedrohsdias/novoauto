import { Body, Controller, Param, Post, Put } from '@nestjs/common';
import { BaseCrudController } from '../../base/baseCrud.controller';
import {
  CreateBlocoDto,
  UpdateBlocoDto,
} from '../../template-modelo-vistoria/dto/bloco.dto';
import { TipoEnderecoEntity } from '../entity/tipoEndereco.entity';
import { TiposEnderecoService } from '../service/tiposEndereco.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Tipos Endereco')
@Controller('tipos-endereco')
export class TiposEnderecoController extends BaseCrudController<TipoEnderecoEntity> {
  constructor(protected readonly baseService: TiposEnderecoService) {
    super(baseService);
  }
  @Post()
  async create(
    @Body() createDto: CreateBlocoDto,
  ): Promise<TipoEnderecoEntity> {
    return super.create(createDto);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateDto: UpdateBlocoDto,
  ): Promise<TipoEnderecoEntity> {
    return super.update(id, updateDto);
  }
}
