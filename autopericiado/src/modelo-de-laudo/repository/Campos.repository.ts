import { Injectable } from '@nestjs/common';
import { BaseRepository } from '../../base.repository';
import { DataSource } from 'typeorm';
import { Campos } from '../entity/campos.entity';

@Injectable()
export class ModeloLaudoRepository extends BaseRepository<Campos> {
  constructor(dataSource: DataSource) {
    super(Campos, dataSource);
  }
}
