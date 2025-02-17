import { Injectable } from '@nestjs/common';
import { BaseRepository } from '../../base/base.repository';
import { DataSource } from 'typeorm';
import { TipoTelefoneEntity } from '../entity/tipoTelefone.entity';

@Injectable()
export class TiposTelefoneRepository extends BaseRepository<TipoTelefoneEntity> {
  constructor(dataSource: DataSource) {
    super(TipoTelefoneEntity, dataSource, TipoTelefoneEntity);
  }
}
