import { Controller } from '@nestjs/common';
import { BaseCrudController } from '../../base/baseCrud.controller';
import { ModeloVistoriaEntity } from '../entity/modeloVistoria.entity';
import { ModeloVistoriaService } from '../service/modeloVistoria.service';
import {
  CreateModeloVistoriaDto,
  UpdateModeloVistoriaDto,
} from '../dto/requests/requestsModeloVistoria.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Modelo Vistoria')
@Controller('modelo-vistoria')
export class ModelosVistoriaController extends BaseCrudController<
  ModeloVistoriaEntity,
  CreateModeloVistoriaDto,
  UpdateModeloVistoriaDto
> {
  constructor(protected readonly baseService: ModeloVistoriaService) {
    super(baseService);
  }
}
