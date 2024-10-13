import { Injectable } from '@nestjs/common';
import { BaseRepository } from '../../base/base.repository';
import { DataSource } from 'typeorm';
import { TiposTelefoneEntity } from '../entity/tiposTelefone.entity';

@Injectable()
export class TiposTelefoneRepository extends BaseRepository<TiposTelefoneEntity> {
  constructor(dataSource: DataSource) {
    super(TiposTelefoneEntity, dataSource, TiposTelefoneEntity);
  }
}
