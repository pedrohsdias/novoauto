import { Body, Controller, Param, Post, Put } from '@nestjs/common';
import { BaseCrudController } from '../../base/baseCrud.controller';
import { ServicoEntity } from '../entity/servico.entity';
import { ServicosService } from '../service/servicos.service';
import {
  CreateBlocoDto,
  UpdateBlocoDto,
} from '../../template-modelo-vistoria/dto/bloco.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Serviço')
@Controller('servicos')
export class ServicosController extends BaseCrudController<ServicoEntity> {
  constructor(protected readonly baseService: ServicosService) {
    super(baseService);
  }
  @Post()
  async create(@Body() createDto: CreateBlocoDto): Promise<ServicoEntity> {
    return super.create(createDto);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateDto: UpdateBlocoDto,
  ): Promise<ServicoEntity> {
    return super.update(id, updateDto);
  }
}
