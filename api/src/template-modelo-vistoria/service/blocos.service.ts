import { Injectable } from '@nestjs/common';
import { BaseService } from '../../base/base.service';
import { BlocosRepository } from '../repository/blocos.repository';
import { BlocoEntity } from '../entity/bloco.entity';

@Injectable()
export class BlocosService extends BaseService<BlocoEntity> {
  constructor(protected readonly repository: BlocosRepository) {
    super(repository);
  }
}
