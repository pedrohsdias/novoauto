import { Injectable } from '@nestjs/common';
import { BaseService } from '../../base/base.service';
import { MunicipioEntity } from '../entity/municipio.entity';
import { MunicipiosRepository } from '../repository/municipios.repository';

@Injectable()
export class MunicipiosService extends BaseService<MunicipioEntity> {
  constructor(protected readonly repository: MunicipiosRepository) {
    super(repository);
  }
}
