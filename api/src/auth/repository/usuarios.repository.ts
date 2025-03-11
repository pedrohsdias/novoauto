import { Injectable } from '@nestjs/common';
import { BaseRepository } from '../../base/base.repository';
import { DataSource } from 'typeorm';
import { UsuariosEntity } from '../entity/usuario.entity';

@Injectable()
export class UsuariosRepository extends BaseRepository<UsuariosEntity> {
  constructor(dataSource: DataSource) {
    super(UsuariosEntity, dataSource, UsuariosEntity, 'usuariosEntity');
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
