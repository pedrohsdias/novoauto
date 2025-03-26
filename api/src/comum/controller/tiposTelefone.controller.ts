import { Controller } from '@nestjs/common';
import { BaseCrudController } from '../../base/baseCrud.controller';
import { TipoTelefoneEntity } from '../entity/tipoTelefone.entity';
import { TiposTelefoneService } from '../service/tiposTelefone.service';
import { ApiTags } from '@nestjs/swagger';
import {
  CreateTipoDto,
  UpdateTipoDto,
} from '../dto/requests/requestsTipos.dto';

@ApiTags('Tipos Telefone')
@Controller('tipos-telefone')
export class TiposTelefoneController extends BaseCrudController<
  TipoTelefoneEntity,
  CreateTipoDto,
  UpdateTipoDto
> {
  constructor(protected readonly baseService: TiposTelefoneService) {
    super(baseService);
  }
}
