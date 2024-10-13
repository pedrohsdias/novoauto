import { Injectable } from '@nestjs/common';
import { BaseRepository } from '../../base/base.repository';
import { DataSource } from 'typeorm';
import { MunicipiosEntity } from '../entity/municipios.entity';

@Injectable()
export class MunicipiosRepository extends BaseRepository<MunicipiosEntity> {
  constructor(dataSource: DataSource) {
    super(MunicipiosEntity, dataSource, MunicipiosEntity);
  }
}
