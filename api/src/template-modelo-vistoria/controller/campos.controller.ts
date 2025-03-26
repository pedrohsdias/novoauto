import { Controller } from '@nestjs/common';
import { BaseCrudController } from '../../base/baseCrud.controller';
import { CampoEntity } from '../entity/campo.entity';
import { CamposService } from '../service/campos.service';
import {
  CreateCampoDto,
  UpdateCampoDto,
} from '../dto/requests/requestsCampo.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Campos do bloco')
@Controller('campo')
export class CamposController extends BaseCrudController<
  CampoEntity,
  CreateCampoDto,
  UpdateCampoDto
> {
  constructor(protected readonly baseService: CamposService) {
    super(baseService);
  }
}
