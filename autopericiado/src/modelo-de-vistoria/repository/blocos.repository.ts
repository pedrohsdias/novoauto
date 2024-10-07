import { Injectable } from '@nestjs/common';
import { BaseRepository } from '../../base/base.repository';
import { DataSource } from 'typeorm';
import { Blocos } from '../entity/blocos.entity';

@Injectable()
export class BlocosRepository extends BaseRepository<Blocos> {
  constructor(dataSource: DataSource) {
    super(Blocos, dataSource, Blocos);
  }
}
