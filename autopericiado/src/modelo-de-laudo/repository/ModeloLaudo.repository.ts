import { Injectable } from '@nestjs/common';
import { BaseRepository } from '../../base.repository';
import { DataSource } from 'typeorm';
import { ModeloLaudo } from '../entity/modelo-laudo.entity';

@Injectable()
export class ModeloLaudoRepository extends BaseRepository<ModeloLaudo> {
  constructor(dataSource: DataSource) {
    super(ModeloLaudo, dataSource);
  }
}
