import { Injectable } from '@nestjs/common';
import { BaseRepository } from '../../base.repository';
import { DataSource } from 'typeorm';
import { ModelosVistoria } from '../entity/modelos-vistoria.entity';

@Injectable()
export class ModeloVistoriaRepository extends BaseRepository<ModelosVistoria> {
  constructor(dataSource: DataSource) {
    super(ModelosVistoria, dataSource);
  }
}
