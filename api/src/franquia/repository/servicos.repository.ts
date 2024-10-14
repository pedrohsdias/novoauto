import { Injectable } from '@nestjs/common';
import { BaseRepository } from '../../base/base.repository';
import { DataSource } from 'typeorm';
import { ServicosEntity } from '../entity/servicos.entity';

@Injectable()
export class ServicosRepository extends BaseRepository<ServicosEntity> {
  constructor(dataSource: DataSource) {
    super(ServicosEntity, dataSource, ServicosEntity);
  }
}
