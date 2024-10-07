import { Injectable } from '@nestjs/common';
import { BaseRepository } from '../../base/base.repository';
import { DataSource } from 'typeorm';
import { Campos } from '../entity/campos.entity';

@Injectable()
export class ModeloVistoriaRepository extends BaseRepository<Campos> {
  constructor(dataSource: DataSource) {
    super(Campos, dataSource, Campos);
  }
}
