import { Injectable } from '@nestjs/common';
import { BaseRepository } from '../../base/base.repository';
import { DataSource } from 'typeorm';
import { ServicoEntity } from '../entity/servico.entity';

@Injectable()
export class ServicosRepository extends BaseRepository<ServicoEntity> {
  constructor(dataSource: DataSource) {
    super(ServicoEntity, dataSource, ServicoEntity);
  }
}
