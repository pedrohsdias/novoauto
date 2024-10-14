import { Injectable } from '@nestjs/common';
import { BaseService } from '../../base/base.service';
import { TiposEnderecoEntity } from '../entity/tiposEndereco.entity';
import { TiposEnderecoRepository } from '../repository/tiposEndereco.repository';

@Injectable()
export class TiposEnderecoService extends BaseService<TiposEnderecoEntity> {
  constructor(protected readonly repository: TiposEnderecoRepository) {
    super(repository);
  }
}
