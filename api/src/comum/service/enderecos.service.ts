import { Injectable } from '@nestjs/common';
import { BaseService } from '../../base/base.service';
import { EnderecosRepository } from '../repository/enderecos.repository';
import { EnderecoEntity } from '../entity/endereco.entity';

@Injectable()
export class EnderecosService extends BaseService<EnderecoEntity> {
  constructor(protected readonly repository: EnderecosRepository) {
    super(repository);
  }
}
