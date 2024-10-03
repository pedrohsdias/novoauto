import { Controller } from '@nestjs/common';
import { BaseController } from '../../base.controller';
import { ModeloVistoria } from '../entity/modelo-vistoria.entity';
import { ModeloVistoriaService } from '../service/ModeloVistoria.service';

@Controller('modelo-vistoria')
export class ModeloVistoriaController extends BaseController<ModeloVistoria> {
  constructor(protected readonly baseService: ModeloVistoriaService) {
    super(baseService);
  }
}
