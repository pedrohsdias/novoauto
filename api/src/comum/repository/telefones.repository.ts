import { Injectable } from '@nestjs/common';
import { BaseRepository } from '../../base/base.repository';
import { DataSource } from 'typeorm';
import { TelefoneEntity } from '../entity/telefone.entity';

@Injectable()
export class TelefonesRepository extends BaseRepository<TelefoneEntity> {
  constructor(dataSource: DataSource) {
    super(TelefoneEntity, dataSource, TelefoneEntity);
  }
}
