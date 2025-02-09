import { Body, Controller, Param, Post, Put } from '@nestjs/common';
import { BaseCrudController } from '../../base/baseCrud.controller';
import {
  CreateBlocoDto,
  UpdateBlocoDto,
} from '../../template-modelo-vistoria/dto/bloco.dto';
import { EnderecosEntity } from '../entity/enderecos.entity';
import { EnderecosService } from '../service/enderecos.service';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('Endereco')
@Controller('enderecos')
export class EnderecosController extends BaseCrudController<EnderecosEntity> {
  constructor(protected readonly baseService: EnderecosService) {
    super(baseService);
  }
  @Post()
  async create(@Body() createDto: CreateBlocoDto): Promise<EnderecosEntity> {
    return super.create(createDto);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateDto: UpdateBlocoDto,
  ): Promise<EnderecosEntity> {
    return super.update(id, updateDto);
  }
}
