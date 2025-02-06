import { Injectable } from '@nestjs/common';
import { BaseRepository } from '../../base/base.repository';
import { DataSource } from 'typeorm';
import { BlocosEntity } from '../entity/blocos.entity';
import { CamposCategoriasEntity } from '../entity/camposCategorias.entity';

@Injectable()
export class CamposCategoriasRepository extends BaseRepository<CamposCategoriasEntity> {
  constructor(dataSource: DataSource) {
    super(CamposCategoriasEntity, dataSource, CamposCategoriasEntity);
  }
}
