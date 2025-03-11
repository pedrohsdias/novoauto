import { Injectable } from '@nestjs/common';
import { BaseRepository } from '../../base/base.repository';
import { DataSource } from 'typeorm';
import { PessoaEntity } from '../entity/pessoa.entity';

@Injectable()
export class PessoasRepository extends BaseRepository<PessoaEntity> {
  constructor(dataSource: DataSource) {
    super(PessoaEntity, dataSource, PessoaEntity, 'pessoaEntity');
  }

  getAutoCompleteColumms(): string[] {
    return [];
  }

  getRelationsToLoadOnMany(): string[] {
    return [];
  }

  getRelationsToLoadOnOne(): string[] {
    return [];
  }
}
