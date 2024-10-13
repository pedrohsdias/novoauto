import { Injectable } from '@nestjs/common';
import { BaseRepository } from '../../base/base.repository';
import { DataSource } from 'typeorm';
import { BlocosEntity } from '../entity/blocos.entity';

@Injectable()
export class BlocosRepository extends BaseRepository<BlocosEntity> {
  constructor(dataSource: DataSource) {
    super(BlocosEntity, dataSource, BlocosEntity);
  }
}
