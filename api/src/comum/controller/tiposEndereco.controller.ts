import { Body, Controller, Param, Post, Put } from '@nestjs/common';
import { BaseController } from '../../base/base.controller';
import {
  CreateBlocoDto,
  UpdateBlocoDto,
} from '../../template-modelo-vistoria/dto/bloco.dto';
import { TiposEnderecoEntity } from '../entity/tiposEndereco.entity';
import { TiposEnderecoService } from '../service/tiposEndereco.service';

@Controller('tipos-endereco')
export class TiposEnderecoController extends BaseController<TiposEnderecoEntity> {
  constructor(protected readonly baseService: TiposEnderecoService) {
    super(baseService);
  }
  @Post()
  async create(
    @Body() createDto: CreateBlocoDto,
  ): Promise<TiposEnderecoEntity> {
    return super.create(createDto);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateDto: UpdateBlocoDto,
  ): Promise<TiposEnderecoEntity> {
    return super.update(id, updateDto);
  }
}
