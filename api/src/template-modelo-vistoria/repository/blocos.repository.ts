import { Injectable } from '@nestjs/common';
import { BaseRepository } from '../../base/base.repository';
import { DataSource } from 'typeorm';
import { BlocoEntity } from '../entity/bloco.entity';

@Injectable()
export class BlocosRepository extends BaseRepository<BlocoEntity> {
  constructor(dataSource: DataSource) {
    super(BlocoEntity, dataSource, BlocoEntity);
  }
}
