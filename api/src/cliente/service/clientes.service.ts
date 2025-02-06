import { Injectable } from '@nestjs/common';
import { BaseService } from '../../base/base.service';
import { ClientesRepository } from '../repository/clientes.repository';
import { ClienteEntity } from '../entity/cliente.entity';

@Injectable()
export class ClientesService extends BaseService<ClienteEntity> {
  constructor(protected readonly repository: ClientesRepository) {
    super(repository);
  }
}
