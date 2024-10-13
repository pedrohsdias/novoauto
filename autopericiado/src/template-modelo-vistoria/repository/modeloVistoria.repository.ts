import { Injectable } from '@nestjs/common';
import { BaseRepository } from '../../base/base.repository';
import { DataSource } from 'typeorm';
import { ModelosVistoriaEntity } from '../entity/modelosVistoria.entity';

@Injectable()
export class ModeloVistoriaRepository extends BaseRepository<ModelosVistoriaEntity> {
  constructor(dataSource: DataSource) {
    super(ModelosVistoriaEntity, dataSource, ModelosVistoriaEntity);
  }
}
