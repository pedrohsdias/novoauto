import { Injectable } from '@nestjs/common';
import { BaseRepository } from '../../base.repository';
import { DataSource } from 'typeorm';
import { ModeloVistoria } from '../entity/modelo-vistoria.entity';

@Injectable()
export class ModeloVistoriaRepository extends BaseRepository<ModeloVistoria> {
  constructor(dataSource: DataSource) {
    super(ModeloVistoria, dataSource);
  }
}
