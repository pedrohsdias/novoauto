import { Injectable } from '@nestjs/common';
import { BaseRepository } from '../../base/base.repository';
import { DataSource } from 'typeorm';
import { TiposEnderecoEntity } from '../entity/tiposEndereco.entity';

@Injectable()
export class TiposEnderecosRepository extends BaseRepository<TiposEnderecoEntity> {
  constructor(dataSource: DataSource) {
    super(TiposEnderecoEntity, dataSource, TiposEnderecoEntity);
  }
}
