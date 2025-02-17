import { Injectable } from '@nestjs/common';
import { BaseRepository } from '../../base/base.repository';
import { DataSource } from 'typeorm';
import { BlocoEntity } from '../entity/bloco.entity';
import { CampoCategoriaEntity } from '../entity/campoCategoria.entity';

@Injectable()
export class CamposCategoriasRepository extends BaseRepository<CampoCategoriaEntity> {
  constructor(dataSource: DataSource) {
    super(CampoCategoriaEntity, dataSource, CampoCategoriaEntity);
  }
}
