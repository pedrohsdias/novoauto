import { Injectable } from '@nestjs/common';
import { BaseRepository } from '../../base/base.repository';
import { DataSource } from 'typeorm';
import { OpcaoCampoEntity } from '../entity/opcaoCampo.entity';

@Injectable()
export class OpcoesCampoRepository extends BaseRepository<OpcaoCampoEntity> {
  constructor(dataSource: DataSource) {
    super(OpcaoCampoEntity, dataSource, OpcaoCampoEntity, 'opcaoCampoEntity');
  }

  getAutoCompleteColumms(): string[] {
    return [];
  }

  getRelationsToLoadOnMany(): string[] {
    return [];
  }

  getRelationsToLoadOnOne(): string[] {
    return [];
  }
}
