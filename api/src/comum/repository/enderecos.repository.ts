import { Injectable } from '@nestjs/common';
import { BaseRepository } from '../../base/base.repository';
import { DataSource } from 'typeorm';
import { EnderecoEntity } from '../entity/endereco.entity';

@Injectable()
export class EnderecosRepository extends BaseRepository<EnderecoEntity> {
  constructor(dataSource: DataSource) {
    super(EnderecoEntity, dataSource, EnderecoEntity);
  }
}
