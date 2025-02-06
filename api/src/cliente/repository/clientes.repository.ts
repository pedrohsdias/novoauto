import { Injectable } from '@nestjs/common';
import { BaseRepository } from '../../base/base.repository';
import { DataSource } from 'typeorm';
import { ClienteEntity } from '../entity/cliente.entity';

@Injectable()
export class ClientesRepository extends BaseRepository<ClienteEntity> {
  constructor(dataSource: DataSource) {
    super(ClienteEntity, dataSource, ClienteEntity);
  }
}
