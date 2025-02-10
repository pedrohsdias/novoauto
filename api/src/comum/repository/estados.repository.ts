import { Injectable } from '@nestjs/common';
import { BaseRepository } from '../../base/base.repository';
import { DataSource } from 'typeorm';
import { EstadosEntity } from '../entity/estados.entity';

@Injectable()
export class EstadosRepository extends BaseRepository<EstadosEntity> {

  protected autoCompleteFields: string[] = ['nome','uf'];
  constructor(dataSource: DataSource) {
    super(EstadosEntity, dataSource, EstadosEntity);
  }
}
