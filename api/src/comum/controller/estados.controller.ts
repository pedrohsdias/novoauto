import { Controller, } from '@nestjs/common';

import { EstadosEntity } from '../entity/estados.entity';
import { EstadosService } from '../service/estados.service';
import { ApiTags } from '@nestjs/swagger';
import { BaseAuxController } from '../../base/baseAux.controller';

@ApiTags('Estado')
@Controller('estados')
export class EstadosController extends BaseAuxController<EstadosEntity> {
  constructor(protected readonly baseService: EstadosService) {
    super(baseService);
  }

}
