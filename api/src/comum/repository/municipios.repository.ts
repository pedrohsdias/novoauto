import { Injectable } from '@nestjs/common';
import { BaseRepository } from '../../base/base.repository';
import { DataSource } from 'typeorm';
import { MunicipioEntity } from '../entity/municipio.entity';

@Injectable()
export class MunicipiosRepository extends BaseRepository<MunicipioEntity> {
  protected autoCompleteFields: string[] = ['nome',];
  constructor(dataSource: DataSource) {
    super(MunicipioEntity, dataSource, MunicipioEntity);
  }
}
