import { Injectable } from '@nestjs/common';
import { BaseRepository } from '../../base/base.repository';
import { DataSource } from 'typeorm';
import { CampoCategoriaEntity } from '../entity/campoCategoria.entity';

@Injectable()
export class CamposCategoriasRepository extends BaseRepository<CampoCategoriaEntity> {
  constructor(dataSource: DataSource) {
    super(
      CampoCategoriaEntity,
      dataSource,
      CampoCategoriaEntity,
      'campoCategoriaEntity',
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
