import { Controller } from '@nestjs/common';
import { BaseCrudController } from '../../base/baseCrud.controller';
import { TipoEnderecoEntity } from '../entity/tipoEndereco.entity';
import { TiposEnderecoService } from '../service/tiposEndereco.service';
import { ApiTags } from '@nestjs/swagger';
import {
  CreateTipoDto,
  UpdateTipoDto,
} from '../dto/requests/requestsTipos.dto';

@ApiTags('Tipos Endereco')
@Controller('tipos-endereco')
export class TiposEnderecoController extends BaseCrudController<
  TipoEnderecoEntity,
  CreateTipoDto,
  UpdateTipoDto
> {
  constructor(protected readonly baseService: TiposEnderecoService) {
    super(baseService);
  }
}
