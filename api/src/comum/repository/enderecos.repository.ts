import { Injectable } from '@nestjs/common';
import { BaseRepository } from '../../base/base.repository';
import { DataSource } from 'typeorm';
import { EnderecosEntity } from '../entity/enderecos.entity';

@Injectable()
export class EnderecosRepository extends BaseRepository<EnderecosEntity> {
  constructor(dataSource: DataSource) {
    super(EnderecosEntity, dataSource, EnderecosEntity);
  }
}
