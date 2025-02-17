import { Injectable } from '@nestjs/common';
import { BaseService } from '../../base/base.service';
import { TipoEnderecoEntity } from '../entity/tipoEndereco.entity';
import { TiposEnderecoRepository } from '../repository/tiposEndereco.repository';

@Injectable()
export class TiposEnderecoService extends BaseService<TipoEnderecoEntity> {
  constructor(protected readonly repository: TiposEnderecoRepository) {
    super(repository);
  }
}
