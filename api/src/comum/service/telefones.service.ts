import { Injectable } from '@nestjs/common';
import { BaseService } from '../../base/base.service';
import { TelefonesRepository } from '../repository/telefones.repository';
import { TelefoneEntity } from '../entity/telefone.entity';

@Injectable()
export class TelefonesService extends BaseService<TelefoneEntity> {
  constructor(protected readonly repository: TelefonesRepository) {
    super(repository);
  }
}
