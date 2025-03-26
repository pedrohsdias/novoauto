import { Controller } from '@nestjs/common';
import { BaseCrudController } from '../../base/baseCrud.controller';
import { ApiTags } from '@nestjs/swagger';
import { TipoContatoEntity } from '../entity/tipoContato.entity';
import { TiposContatoService } from '../service/tiposContato.service';
import {
  CreateTipoDto,
  UpdateTipoDto,
} from '../dto/requests/requestsTipos.dto';

@ApiTags('Tipos Contato')
@Controller('tipos-contato')
export class TiposContatoController extends BaseCrudController<
  TipoContatoEntity,
  CreateTipoDto,
  UpdateTipoDto
> {
  constructor(protected readonly baseService: TiposContatoService) {
    super(baseService);
  }
}
