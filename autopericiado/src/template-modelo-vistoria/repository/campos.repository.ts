import { Injectable } from '@nestjs/common';
import { BaseRepository } from '../../base/base.repository';
import { DataSource } from 'typeorm';
import { Campos } from '../entity/campos.entity';

@Injectable()
export class CamposRepository extends BaseRepository<Campos> {
  constructor(dataSource: DataSource) {
    super(Campos, dataSource, Campos);
  }
}
