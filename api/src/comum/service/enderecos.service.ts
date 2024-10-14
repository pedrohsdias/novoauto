import { Injectable } from '@nestjs/common';
import { BaseService } from '../../base/base.service';
import { EnderecosRepository } from '../repository/enderecos.repository';
import { EnderecosEntity } from '../entity/enderecos.entity';

@Injectable()
export class EnderecosService extends BaseService<EnderecosEntity> {
  constructor(protected readonly repository: EnderecosRepository) {
    super(repository);
  }
}
