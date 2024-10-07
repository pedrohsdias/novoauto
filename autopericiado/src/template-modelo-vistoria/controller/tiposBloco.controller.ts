import { Body, Controller, Param, Post, Put } from '@nestjs/common';
import { BaseController } from '../../base/base.controller';
import { TiposBloco } from '../entity/tipos-bloco.entity';
import { TiposBlocoService } from '../service/tiposBloco.service';
import { CreateTipoBlocoDto, UpdateTipoBlocoDto } from '../dto/tipoBloco.dto';

@Controller('tipos-bloco')
export class TiposBlocoController extends BaseController<TiposBloco> {
  constructor(protected readonly baseService: TiposBlocoService) {
    super(baseService);
  }
  @Post()
  async create(@Body() createDto: CreateTipoBlocoDto): Promise<TiposBloco> {
    return super.create(createDto);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateDto: UpdateTipoBlocoDto,
  ): Promise<TiposBloco> {
    return super.update(id, updateDto);
  }
}
