import { Injectable } from '@nestjs/common';
import { BaseService } from '../../base/base.service';
import { ClientesRepository } from '../repository/clientes.repository';
import { ClienteEntity } from '../entity/cliente.entity';
import { BaseModelDto } from '../../base/dto/baseModel.dto';
import { PessoasService } from '../../comum/service/pessoas.service';
import {
  CreateClienteDto,
  UpdateClienteDto,
} from '../dto/requests/requestsCliente.dto';

@Injectable()
export class ClientesService extends BaseService<ClienteEntity> {
  constructor(
    protected readonly repository: ClientesRepository,
    protected readonly pessoaService: PessoasService,
  ) {
    super(repository);
  }

  async create(createDto: BaseModelDto): Promise<ClienteEntity> {
    const clienteDto = createDto as CreateClienteDto;
    const pessoaSalva = await this.pessoaService.create(clienteDto);
    clienteDto.apelido = await this.buildApelido(clienteDto);

    const dadosCliente = { ...createDto, pessoa: pessoaSalva };
    return super.create(dadosCliente);
  }

  async update(id: string, updateDto: BaseModelDto): Promise<ClienteEntity> {
    const clienteDto = updateDto as UpdateClienteDto;
    const cliente = await this.repository.findById(id);

    clienteDto.apelido = await this.buildApelido(clienteDto);

    await this.pessoaService.update(cliente.pessoa.id, updateDto);
    return super.update(id, clienteDto);
  }

  async buildApelido(dto: CreateClienteDto): Promise<string> {
    if (dto?.apelido && dto.apelido.trim().length > 0) {
      return dto.apelido;
    }
    const total = await this.repository.count();
    return total.toString();
  }
}
