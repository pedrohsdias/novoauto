import { Injectable } from '@nestjs/common';
import { BaseService } from '../../base/base.service';
import { Campos } from '../entity/campos.entity';
import { CamposRepository } from '../repository/campos.repository';

@Injectable()
export class CamposService extends BaseService<Campos> {
  constructor(protected readonly repository: CamposRepository) {
    super(repository);
  }
}
