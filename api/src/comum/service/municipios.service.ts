import { Injectable } from '@nestjs/common';
import { BaseService } from '../../base/base.service';
import { MunicipiosEntity } from '../entity/municipios.entity';
import { MunicipiosRepository } from '../repository/municipios.repository';

@Injectable()
export class MunicipiosService extends BaseService<MunicipiosEntity> {
  constructor(protected readonly repository: MunicipiosRepository) {
    super(repository);
  }
}
