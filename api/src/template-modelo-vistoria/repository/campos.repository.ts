import { Injectable } from '@nestjs/common';
import { BaseRepository } from '../../base/base.repository';
import { DataSource } from 'typeorm';
import { CampoEntity } from '../entity/campo.entity';

@Injectable()
export class CamposRepository extends BaseRepository<CampoEntity> {
  constructor(dataSource: DataSource) {
    super(CampoEntity, dataSource, CampoEntity, 'campoEntity');
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
