import { Injectable } from '@nestjs/common';
import { BaseService } from '../../base/base.service';
import { UnidadesRepository } from '../repository/unidades.repository';
import { UnidadesEntity } from '../entity/unidades.entity';

@Injectable()
export class UnidadesService extends BaseService<UnidadesEntity> {
  constructor(protected readonly repository: UnidadesRepository) {
    super(repository);
  }
}
