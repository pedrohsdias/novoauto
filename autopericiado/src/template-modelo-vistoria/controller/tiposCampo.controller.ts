import { Body, Controller, Param, Post, Put } from '@nestjs/common';
import { BaseController } from '../../base/base.controller';
import { TiposCampoService } from '../service/tiposCampo.service';
import { CreateTipoCampoDto, UpdateTipoCampoDto } from '../dto/tipoCampo.dto';
import { TiposCampo } from '../entity/tiposCampo.entity';

@Controller('tipos-bloco')
export class TiposCampoController extends BaseController<TiposCampo> {
  constructor(protected readonly baseService: TiposCampoService) {
    super(baseService);
  }
  @Post()
  async create(@Body() createDto: CreateTipoCampoDto): Promise<TiposCampo> {
    return super.create(createDto);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateDto: UpdateTipoCampoDto,
  ): Promise<TiposCampo> {
    return super.update(id, updateDto);
  }
}
