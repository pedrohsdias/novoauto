import { Controller } from '@nestjs/common';
import { BaseController } from '../../base.controller';
import { ModeloVistoria } from '../entity/modelo-vistoria.entity';

@Controller('modelo-vistoria')
export class ModeloVistoriaController extends BaseController<ModeloVistoria> {}
