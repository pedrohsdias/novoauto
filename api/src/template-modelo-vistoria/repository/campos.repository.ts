import { Injectable } from '@nestjs/common';
import { BaseRepository } from '../../base/base.repository';
import { DataSource } from 'typeorm';
import { CamposEntity } from '../entity/campos.entity';

@Injectable()
export class CamposRepository extends BaseRepository<CamposEntity> {
  constructor(dataSource: DataSource) {
    super(CamposEntity, dataSource, CamposEntity);
  }
}
