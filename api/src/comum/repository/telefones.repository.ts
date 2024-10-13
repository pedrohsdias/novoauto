import { Injectable } from '@nestjs/common';
import { BaseRepository } from '../../base/base.repository';
import { DataSource } from 'typeorm';
import { TelefonesEntity } from '../entity/telefones.entity';

@Injectable()
export class TelefonesRepository extends BaseRepository<TelefonesEntity> {
  constructor(dataSource: DataSource) {
    super(TelefonesEntity, dataSource, TelefonesEntity);
  }
}
