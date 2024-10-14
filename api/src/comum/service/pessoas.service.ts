import { Injectable } from '@nestjs/common';
import { BaseService } from '../../base/base.service';
import { PessoasRepository } from '../repository/pessoas.repository';
import { PessoasEntity } from '../entity/pessoas.entity';

@Injectable()
export class PessoasService extends BaseService<PessoasEntity> {
  constructor(protected readonly repository: PessoasRepository) {
    super(repository);
  }
}
