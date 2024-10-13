import { Injectable } from '@nestjs/common';
import { BaseRepository } from '../../base/base.repository';
import { DataSource } from 'typeorm';
import { OpcoesCampoEntity } from '../entity/opcoesCampo.entity';

@Injectable()
export class OpcoesCampoRepository extends BaseRepository<OpcoesCampoEntity> {
  constructor(dataSource: DataSource) {
    super(OpcoesCampoEntity, dataSource, OpcoesCampoEntity);
  }
}
