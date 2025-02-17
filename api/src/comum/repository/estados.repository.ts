import { Injectable } from '@nestjs/common';
import { BaseRepository } from '../../base/base.repository';
import { DataSource } from 'typeorm';
import { EstadoEntity } from '../entity/estado.entity';

@Injectable()
export class EstadosRepository extends BaseRepository<EstadoEntity> {

  protected autoCompleteFields: string[] = ['nome','uf'];
  constructor(dataSource: DataSource) {
    super(EstadoEntity, dataSource, EstadoEntity);
  }
}
