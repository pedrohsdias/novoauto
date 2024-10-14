import { Injectable } from '@nestjs/common';
import { BaseRepository } from '../../base/base.repository';
import { DataSource } from 'typeorm';
import { UnidadesEntity } from '../entity/unidades.entity';

@Injectable()
export class UnidadesRepository extends BaseRepository<UnidadesEntity> {
  constructor(dataSource: DataSource) {
    super(UnidadesEntity, dataSource, UnidadesEntity);
  }
}
