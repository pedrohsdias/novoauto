import { Body, Controller, Param, Post, Put } from '@nestjs/common';
import { BaseCrudController } from '../../base/baseCrud.controller';
import {
  CreateBlocoDto,
  UpdateBlocoDto,
} from '../../template-modelo-vistoria/dto/bloco.dto';
import { ApiTags } from '@nestjs/swagger';
import { ClienteEntity } from '../entity/cliente.entity';
import { ClientesService } from '../service/clientes.service';

@ApiTags('Cliente')
@Controller('clientes')
export class ClientesController extends BaseCrudController<ClienteEntity> {
  constructor(protected readonly baseService: ClientesService) {
    super(baseService);
  }
  @Post()
  async create(
    @Body() createDto: CreateBlocoDto,
  ): Promise<ClienteEntity> {
    return super.create(createDto);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateDto: UpdateBlocoDto,
  ): Promise<ClienteEntity> {
    return super.update(id, updateDto);
  }
}
