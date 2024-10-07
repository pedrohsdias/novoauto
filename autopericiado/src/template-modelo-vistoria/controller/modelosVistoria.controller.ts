import { Body, Controller, Param, Post, Put } from '@nestjs/common';
import { BaseController } from '../../base/base.controller';
import { ModelosVistoria } from '../entity/modelosVistoria.entity';
import { ModeloVistoriaService } from '../service/modeloVistoria.service';
import {
  CreateModeloVistoriaDto,
  UpdateModeloVistoriaDto,
} from '../dto/modeloVistoria.dto';

@Controller('modelo-vistoria')
export class ModelosVistoriaController extends BaseController<ModelosVistoria> {
  constructor(protected readonly baseService: ModeloVistoriaService) {
    super(baseService);
  }
  @Post()
  async create(
    @Body() createDto: CreateModeloVistoriaDto,
  ): Promise<ModelosVistoria> {
    return super.create(createDto);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateDto: UpdateModeloVistoriaDto,
  ): Promise<ModelosVistoria> {
    return super.update(id, updateDto);
  }
}
