import { Body, Controller, Param, Post, Put } from '@nestjs/common';
import { BaseCrudController } from '../../base/baseCrud.controller';
import {
  CreateBlocoDto,
  UpdateBlocoDto,
} from '../../template-modelo-vistoria/dto/bloco.dto';
import { TipoTelefoneEntity } from '../entity/tipoTelefone.entity';
import { TiposTelefoneService } from '../service/tiposTelefone.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Tipos Telefone')
@Controller('tipos-telefone')
export class TiposTelefoneController extends BaseCrudController<TipoTelefoneEntity> {
  constructor(protected readonly baseService: TiposTelefoneService) {
    super(baseService);
  }
  @Post()
  async create(
    @Body() createDto: CreateBlocoDto,
  ): Promise<TipoTelefoneEntity> {
    return super.create(createDto);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateDto: UpdateBlocoDto,
  ): Promise<TipoTelefoneEntity> {
    return super.update(id, updateDto);
  }
}
