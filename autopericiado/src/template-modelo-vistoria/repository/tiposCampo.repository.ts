import { Injectable } from '@nestjs/common';
import { BaseRepository } from '../../base/base.repository';
import { DataSource } from 'typeorm';
import { TiposCampo } from '../entity/tiposCampo.entity';

@Injectable()
export class TiposCampoRepository extends BaseRepository<TiposCampo> {
  constructor(dataSource: DataSource) {
    super(TiposCampo, dataSource, TiposCampo);
  }
}
