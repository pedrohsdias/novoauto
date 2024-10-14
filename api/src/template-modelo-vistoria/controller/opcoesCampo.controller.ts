import { Body, Controller, Param, Post, Put } from '@nestjs/common';
import { BaseController } from '../../base/base.controller';
import { OpcoesCampoEntity } from '../entity/opcoesCampo.entity';
import { OpcoesCampoService } from '../service/opcoesCampo.service';
import {
  CreateOpcaoCampoDto,
  UpdateOpcaoCampoDto,
} from '../dto/opcaoCampo.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Opções dos campos do bloco')
@Controller('opcao-campo')
export class OpcoesCampoController extends BaseController<OpcoesCampoEntity> {
  constructor(protected readonly baseService: OpcoesCampoService) {
    super(baseService);
  }
  @Post()
  async create(
    @Body() createDto: CreateOpcaoCampoDto,
  ): Promise<OpcoesCampoEntity> {
    return super.create(createDto);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateDto: UpdateOpcaoCampoDto,
  ): Promise<OpcoesCampoEntity> {
    return super.update(id, updateDto);
  }
}
