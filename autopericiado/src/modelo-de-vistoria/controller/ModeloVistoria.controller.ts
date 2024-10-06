import { Controller } from '@nestjs/common';
import { BaseController } from '../../base.controller';
import { ModelosVistoria } from '../entity/modelos-vistoria.entity';
import { ModeloVistoriaService } from '../service/ModeloVistoria.service';

@Controller('modelo-vistoria')
export class ModeloVistoriaController extends BaseController<ModelosVistoria> {
  constructor(protected readonly baseService: ModeloVistoriaService) {
    super(baseService);
  }
}
