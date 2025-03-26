import { Injectable } from '@nestjs/common';
import { BaseRepository } from '../../base/base.repository';
import { DataSource } from 'typeorm';
import { TipoContatoEntity } from '../entity/tipoContato.entity';

@Injectable()
export class TiposContatoRepository extends BaseRepository<TipoContatoEntity> {
  constructor(dataSource: DataSource) {
    super(
      TipoContatoEntity,
      dataSource,
      TipoContatoEntity,
      'tipoContatoEntity',
    );
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
