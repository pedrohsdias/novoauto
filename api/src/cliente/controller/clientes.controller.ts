import { Body, Controller, Param, Post, Put } from '@nestjs/common';
import { BaseCrudController } from '../../base/baseCrud.controller';
import { ApiTags } from '@nestjs/swagger';
import { ClienteEntity } from '../entity/cliente.entity';
import { ClientesService } from '../service/clientes.service';
import { ApiResponseDto } from '../../base/dto/apiResponse.dto';
import {
  CreateClienteDto,
  UpdateClienteDto,
} from '../dto/requests/requestsCliente.dto';

@ApiTags('Cliente')
@Controller('clientes')
export class ClientesController extends BaseCrudController<
  ClienteEntity,
  CreateClienteDto,
  UpdateClienteDto
> {
  constructor(protected readonly baseService: ClientesService) {
    super(baseService);
  }
  @Post()
  async create(
    @Body() createDto: CreateClienteDto,
  ): Promise<ApiResponseDto<ClienteEntity>> {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    //TODO-arrumar esses DTOS de retornos
    return this.service.create2(createDto);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateDto: UpdateClienteDto,
  ): Promise<ApiResponseDto<ClienteEntity>> {
    return super.update(id, updateDto);
  }
}
