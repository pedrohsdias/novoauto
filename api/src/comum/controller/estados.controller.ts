import { Controller } from '@nestjs/common';

import { EstadoEntity } from '../entity/estado.entity';
import { EstadosService } from '../service/estados.service';
import { ApiTags } from '@nestjs/swagger';
import { BaseAuxController } from '../../base/baseAux.controller';

@ApiTags('Auto Complete')
@Controller('estados')
export class EstadosController extends BaseAuxController<EstadoEntity> {
  constructor(protected readonly baseService: EstadosService) {
    super(baseService);
  }
}
