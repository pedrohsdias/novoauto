import { Body, Controller, Param, Post, Put } from '@nestjs/common';
import { BaseController } from '../../base/base.controller';
import {
  CreateBlocoDto,
  UpdateBlocoDto,
} from '../../template-modelo-vistoria/dto/bloco.dto';
import { EstadosEntity } from '../entity/estados.entity';
import { EstadosService } from '../service/estados.service';

@Controller('estados')
export class EstadosController extends BaseController<EstadosEntity> {
  constructor(protected readonly baseService: EstadosService) {
    super(baseService);
  }
  @Post()
  async create(@Body() createDto: CreateBlocoDto): Promise<EstadosEntity> {
    return super.create(createDto);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateDto: UpdateBlocoDto,
  ): Promise<EstadosEntity> {
    return super.update(id, updateDto);
  }
}
