import { Injectable } from '@nestjs/common';
import { BaseRepository } from '../../base/base.repository';
import { DataSource } from 'typeorm';
import { FranquiadoresEntity } from '../entity/franquiadores.entity';

@Injectable()
export class FranquiadoresRepository extends BaseRepository<FranquiadoresEntity> {
  constructor(dataSource: DataSource) {
    super(FranquiadoresEntity, dataSource, FranquiadoresEntity);
  }
}
