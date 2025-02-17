import { Body, Controller, Param, Post, Put } from '@nestjs/common';
import { BaseCrudController } from '../../base/baseCrud.controller';
import {
  UpdateBlocoDto,
} from '../../template-modelo-vistoria/dto/bloco.dto';
import { ApiTags } from '@nestjs/swagger';
import { ClienteEntity } from '../entity/cliente.entity';
import { ClientesService } from '../service/clientes.service';
import { CreateClienteDto } from '../dto/createCliente.dto';

@ApiTags('Cliente')
@Controller('clientes')
export class ClientesController extends BaseCrudController<ClienteEntity> {
  constructor(protected readonly baseService: ClientesService) {
    super(baseService);
  }
  @Post()
  async create(
    @Body() createDto: CreateClienteDto,
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
