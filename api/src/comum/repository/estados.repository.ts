import { Injectable } from '@nestjs/common';
import { BaseRepository } from '../../base/base.repository';
import { DataSource } from 'typeorm';
import { EstadoEntity } from '../entity/estado.entity';

@Injectable()
export class EstadosRepository extends BaseRepository<EstadoEntity> {
  constructor(dataSource: DataSource) {
    super(EstadoEntity, dataSource, EstadoEntity, 'estadoEntity');
  }

  getAutoCompleteColumms(): string[] {
    return ['nome', 'uf'];
  }

  getRelationsToLoadOnMany(): string[] {
    return [];
  }

  getRelationsToLoadOnOne(): string[] {
    return [];
  }
}
