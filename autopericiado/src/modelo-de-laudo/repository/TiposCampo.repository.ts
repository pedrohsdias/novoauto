import { Injectable } from '@nestjs/common';
import { BaseRepository } from '../../base.repository';
import { DataSource } from 'typeorm';
import { TiposCampo } from '../entity/tipos-campo.entity';

@Injectable()
export class ModeloLaudoRepository extends BaseRepository<TiposCampo> {
  constructor(dataSource: DataSource) {
    super(TiposCampo, dataSource);
  }
}
