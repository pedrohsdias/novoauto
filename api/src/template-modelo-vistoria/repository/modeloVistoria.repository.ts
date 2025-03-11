import { Injectable } from '@nestjs/common';
import { BaseRepository } from '../../base/base.repository';
import { DataSource } from 'typeorm';
import { ModeloVistoriaEntity } from '../entity/modeloVistoria.entity';

@Injectable()
export class ModeloVistoriaRepository extends BaseRepository<ModeloVistoriaEntity> {
  constructor(dataSource: DataSource) {
    super(
      ModeloVistoriaEntity,
      dataSource,
      ModeloVistoriaEntity,
      'modeloVistoria',
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
