import { Injectable } from '@nestjs/common';
import { BaseRepository } from '../../base/base.repository';
import { DataSource } from 'typeorm';
import { PessoasEntity } from '../entity/pessoas.entity';

@Injectable()
export class PessoasRepository extends BaseRepository<PessoasEntity> {
  constructor(dataSource: DataSource) {
    super(PessoasEntity, dataSource, PessoasEntity);
  }
}
