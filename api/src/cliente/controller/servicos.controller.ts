import { Body, Controller, Param, Post, Put } from '@nestjs/common';
import { BaseCrudController } from '../../base/baseCrud.controller';
import { ServicosEntity } from '../entity/servicos.entity';
import { ServicosService } from '../service/servicos.service';
import {
  CreateBlocoDto,
  UpdateBlocoDto,
} from '../../template-modelo-vistoria/dto/bloco.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Serviço')
@Controller('servicos')
export class ServicosController extends BaseCrudController<ServicosEntity> {
  constructor(protected readonly baseService: ServicosService) {
    super(baseService);
  }
  @Post()
  async create(@Body() createDto: CreateBlocoDto): Promise<ServicosEntity> {
    return super.create(createDto);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateDto: UpdateBlocoDto,
  ): Promise<ServicosEntity> {
    return super.update(id, updateDto);
  }
}
