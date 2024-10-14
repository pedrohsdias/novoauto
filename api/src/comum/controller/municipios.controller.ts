import { Body, Controller, Param, Post, Put } from '@nestjs/common';
import { BaseController } from '../../base/base.controller';
import {
  CreateBlocoDto,
  UpdateBlocoDto,
} from '../../template-modelo-vistoria/dto/bloco.dto';
import { MunicipiosEntity } from '../entity/municipios.entity';
import { MunicipiosService } from '../service/municipios.service';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('Municipio')
@Controller('municipios')
export class MunicipiosController extends BaseController<MunicipiosEntity> {
  constructor(protected readonly baseService: MunicipiosService) {
    super(baseService);
  }
  @Post()
  async create(@Body() createDto: CreateBlocoDto): Promise<MunicipiosEntity> {
    return super.create(createDto);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateDto: UpdateBlocoDto,
  ): Promise<MunicipiosEntity> {
    return super.update(id, updateDto);
  }
}
