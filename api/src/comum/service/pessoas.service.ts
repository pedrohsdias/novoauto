import { Injectable } from '@nestjs/common';
import { BaseService } from '../../base/base.service';
import { PessoasRepository } from '../repository/pessoas.repository';
import { PessoaEntity } from '../entity/pessoa.entity';

@Injectable()
export class PessoasService extends BaseService<PessoaEntity> {
  constructor(protected readonly repository: PessoasRepository) {
    super(repository);
  }
}
