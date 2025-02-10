import { Body, Controller, Param, Post, Put } from '@nestjs/common';
import { BaseCrudController } from '../../base/baseCrud.controller';
import {
  CreateBlocoDto,
  UpdateBlocoDto,
} from '../../template-modelo-vistoria/dto/bloco.dto';
import { MunicipiosEntity } from '../entity/municipios.entity';
import { MunicipiosService } from '../service/municipios.service';
import { ApiTags } from '@nestjs/swagger';
import { BaseAuxController } from '../../base/baseAux.controller';
@ApiTags('Municipio')
@Controller('municipios')
export class MunicipiosController extends BaseAuxController<MunicipiosEntity> {
  constructor(protected readonly baseService: MunicipiosService) {
    super(baseService);
  }
}
