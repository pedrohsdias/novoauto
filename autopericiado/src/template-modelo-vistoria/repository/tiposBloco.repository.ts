import { Injectable } from '@nestjs/common';
import { BaseRepository } from '../../base/base.repository';
import { DataSource } from 'typeorm';
import { TiposBloco } from '../entity/tipos-bloco.entity';

@Injectable()
export class TiposBlocoRepository extends BaseRepository<TiposBloco> {
  constructor(dataSource: DataSource) {
    super(TiposBloco, dataSource, TiposBloco);
  }
}
