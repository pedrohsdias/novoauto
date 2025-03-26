import { Controller } from '@nestjs/common';
import { MunicipioEntity } from '../entity/municipio.entity';
import { MunicipiosService } from '../service/municipios.service';
import { ApiTags } from '@nestjs/swagger';
import { BaseAuxController } from '../../base/baseAux.controller';
@ApiTags('Auto Complete')
@Controller('municipios')
export class MunicipiosController extends BaseAuxController<MunicipioEntity> {
  constructor(protected readonly baseService: MunicipiosService) {
    super(baseService);
  }
}
