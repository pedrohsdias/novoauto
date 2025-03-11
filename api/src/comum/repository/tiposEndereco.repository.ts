import { Injectable } from '@nestjs/common';
import { BaseRepository } from '../../base/base.repository';
import { DataSource } from 'typeorm';
import { TipoEnderecoEntity } from '../entity/tipoEndereco.entity';

@Injectable()
export class TiposEnderecoRepository extends BaseRepository<TipoEnderecoEntity> {
  constructor(dataSource: DataSource) {
    super(
      TipoEnderecoEntity,
      dataSource,
      TipoEnderecoEntity,
      'tipoEnderecoEntity',
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
