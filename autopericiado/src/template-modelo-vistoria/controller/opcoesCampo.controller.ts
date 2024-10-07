import { Body, Controller, Param, Post, Put } from '@nestjs/common';
import { BaseController } from '../../base/base.controller';
import { OpcoesCampo } from '../entity/opcoesCampo.entity';
import { OpcoesCampoService } from '../service/opcoesCampo.service';
import {
  CreateOpcaoCampoDto,
  UpdateOpcaoCampoDto,
} from '../dto/opcaoCampo.dto';

@Controller('opcao-campo')
export class OpcoesCampoController extends BaseController<OpcoesCampo> {
  constructor(protected readonly baseService: OpcoesCampoService) {
    super(baseService);
  }
  @Post()
  async create(@Body() createDto: CreateOpcaoCampoDto): Promise<OpcoesCampo> {
    return super.create(createDto);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateDto: UpdateOpcaoCampoDto,
  ): Promise<OpcoesCampo> {
    return super.update(id, updateDto);
  }
}
