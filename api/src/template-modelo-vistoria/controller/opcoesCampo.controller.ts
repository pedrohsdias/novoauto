import { Body, Controller, Param, Post, Put } from '@nestjs/common';
import { BaseCrudController } from '../../base/baseCrud.controller';
import { OpcaoCampoEntity } from '../entity/opcaoCampo.entity';
import { OpcoesCampoService } from '../service/opcoesCampo.service';
import {
  CreateOpcaoCampoDto,
  UpdateOpcaoCampoDto,
} from '../dto/opcaoCampo.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Opções dos campos do bloco')
@Controller('opcao-campo')
export class OpcoesCampoController extends BaseCrudController<OpcaoCampoEntity> {
  constructor(protected readonly baseService: OpcoesCampoService) {
    super(baseService);
  }
  @Post()
  async create(
    @Body() createDto: CreateOpcaoCampoDto,
  ): Promise<OpcaoCampoEntity> {
    return super.create(createDto);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateDto: UpdateOpcaoCampoDto,
  ): Promise<OpcaoCampoEntity> {
    return super.update(id, updateDto);
  }
}
