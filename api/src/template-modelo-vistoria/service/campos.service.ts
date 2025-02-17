import { Injectable } from '@nestjs/common';
import { BaseService } from '../../base/base.service';
import { CampoEntity } from '../entity/campo.entity';
import { CamposRepository } from '../repository/campos.repository';

@Injectable()
export class CamposService extends BaseService<CampoEntity> {
  constructor(protected readonly repository: CamposRepository) {
    super(repository);
  }
}
