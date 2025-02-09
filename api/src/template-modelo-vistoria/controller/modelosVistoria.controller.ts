import { Body, Controller, Param, Post, Put } from '@nestjs/common';
import { BaseCrudController } from '../../base/baseCrud.controller';
import { ModelosVistoriaEntity } from '../entity/modelosVistoria.entity';
import { ModeloVistoriaService } from '../service/modeloVistoria.service';
import {
  CreateModeloVistoriaDto,
  UpdateModeloVistoriaDto,
} from '../dto/modeloVistoria.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Modelo Vistoria')
@Controller('modelo-vistoria')
export class ModelosVistoriaController extends BaseCrudController<ModelosVistoriaEntity> {
  constructor(protected readonly baseService: ModeloVistoriaService) {
    super(baseService);
  }
  @Post()
  async create(
    @Body() createDto: CreateModeloVistoriaDto,
  ): Promise<ModelosVistoriaEntity> {
    return super.create(createDto);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateDto: UpdateModeloVistoriaDto,
  ): Promise<ModelosVistoriaEntity> {
    return super.update(id, updateDto);
  }
}
