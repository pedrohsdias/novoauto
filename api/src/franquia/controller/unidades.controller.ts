import { Body, Controller, Param, Post, Put } from '@nestjs/common';
import { BaseController } from '../../base/base.controller';
import { UnidadesService } from '../service/unidades.service';
import { UnidadesEntity } from '../entity/unidades.entity';
import {
  CreateBlocoDto,
  UpdateBlocoDto,
} from '../../template-modelo-vistoria/dto/bloco.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Unidade')
@Controller('unidades')
export class UnidadesController extends BaseController<UnidadesEntity> {
  constructor(protected readonly baseService: UnidadesService) {
    super(baseService);
  }
  @Post()
  async create(@Body() createDto: CreateBlocoDto): Promise<UnidadesEntity> {
    return super.create(createDto);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateDto: UpdateBlocoDto,
  ): Promise<UnidadesEntity> {
    return super.update(id, updateDto);
  }
}
