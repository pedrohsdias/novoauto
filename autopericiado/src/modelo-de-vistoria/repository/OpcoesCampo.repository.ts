import { Injectable } from '@nestjs/common';
import { BaseRepository } from '../../base.repository';
import { DataSource } from 'typeorm';
import { OpcoesCampo } from '../entity/opcoes-campo.entity';

@Injectable()
export class ModeloVistoriaRepository extends BaseRepository<OpcoesCampo> {
  constructor(dataSource: DataSource) {
    super(OpcoesCampo, dataSource);
  }
}
