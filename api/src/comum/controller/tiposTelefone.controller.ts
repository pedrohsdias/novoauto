import { Body, Controller, Param, Post, Put } from '@nestjs/common';
import { BaseCrudController } from '../../base/baseCrud.controller';
import {
  CreateBlocoDto,
  UpdateBlocoDto,
} from '../../template-modelo-vistoria/dto/bloco.dto';
import { TiposTelefoneEntity } from '../entity/tiposTelefone.entity';
import { TiposTelefoneService } from '../service/tiposTelefone.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Tipos Telefone')
@Controller('tipos-telefone')
export class TiposTelefoneController extends BaseCrudController<TiposTelefoneEntity> {
  constructor(protected readonly baseService: TiposTelefoneService) {
    super(baseService);
  }
  @Post()
  async create(
    @Body() createDto: CreateBlocoDto,
  ): Promise<TiposTelefoneEntity> {
    return super.create(createDto);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateDto: UpdateBlocoDto,
  ): Promise<TiposTelefoneEntity> {
    return super.update(id, updateDto);
  }
}
