import { Injectable } from '@nestjs/common';
import { BaseService } from '../../base/base.service';
import { TelefonesRepository } from '../repository/telefones.repository';
import { TelefonesEntity } from '../entity/telefones.entity';

@Injectable()
export class TelefonesService extends BaseService<TelefonesEntity> {
  constructor(protected readonly repository: TelefonesRepository) {
    super(repository);
  }
}
