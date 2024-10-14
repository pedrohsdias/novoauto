import { Body, Controller, Param, Post, Put } from '@nestjs/common';
import { BaseController } from '../../base/base.controller';
import {
  CreateBlocoDto,
  UpdateBlocoDto,
} from '../../template-modelo-vistoria/dto/bloco.dto';
import { TiposTelefoneEntity } from '../entity/tiposTelefone.entity';
import { TiposTelefoneService } from '../service/tiposTelefone.service';

@Controller('tipos-telefone')
export class TiposTelefoneController extends BaseController<TiposTelefoneEntity> {
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
