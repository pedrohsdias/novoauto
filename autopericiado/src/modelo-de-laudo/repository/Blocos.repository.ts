import { Injectable } from '@nestjs/common';
import { BaseRepository } from '../../base.repository';
import { DataSource } from 'typeorm';
import { Blocos } from '../entity/blocos.entity';

@Injectable()
export class ModeloLaudoRepository extends BaseRepository<Blocos> {
  constructor(dataSource: DataSource) {
    super(Blocos, dataSource);
  }
}
