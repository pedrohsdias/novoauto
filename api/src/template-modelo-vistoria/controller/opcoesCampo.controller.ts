import { Controller } from '@nestjs/common';
import { BaseCrudController } from '../../base/baseCrud.controller';
import { OpcaoCampoEntity } from '../entity/opcaoCampo.entity';
import { OpcoesCampoService } from '../service/opcoesCampo.service';
import {
  CreateOpcaoCampoDto,
  UpdateOpcaoCampoDto,
} from '../dto/requests/requestsOpcaoCampo.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Opções dos campos do bloco')
@Controller('opcao-campo')
export class OpcoesCampoController extends BaseCrudController<
  OpcaoCampoEntity,
  CreateOpcaoCampoDto,
  UpdateOpcaoCampoDto
> {
  constructor(protected readonly baseService: OpcoesCampoService) {
    super(baseService);
  }
}
