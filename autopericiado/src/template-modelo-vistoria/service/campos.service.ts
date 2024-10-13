import { Injectable } from '@nestjs/common';
import { BaseService } from '../../base/base.service';
import { CamposEntity } from '../entity/campos.entity';
import { CamposRepository } from '../repository/campos.repository';

@Injectable()
export class CamposService extends BaseService<CamposEntity> {
  constructor(protected readonly repository: CamposRepository) {
    super(repository);
  }
}
