import { Injectable } from '@nestjs/common';
import { BaseRepository } from '../../base/base.repository';
import { DataSource } from 'typeorm';
import { ContatoEntity } from '../entity/contato.entity';

@Injectable()
export class ContatosRepository extends BaseRepository<ContatoEntity> {
  constructor(dataSource: DataSource) {
    super(ContatoEntity, dataSource, ContatoEntity, 'contatoEntity');
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
