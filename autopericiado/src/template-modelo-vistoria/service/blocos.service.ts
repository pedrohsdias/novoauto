import { Injectable } from '@nestjs/common';
import { BaseService } from '../../base/base.service';
import { BlocosRepository } from '../repository/blocos.repository';
import { Blocos } from '../entity/blocos.entity';

@Injectable()
export class BlocosService extends BaseService<Blocos> {
  constructor(protected readonly repository: BlocosRepository) {
    super(repository);
  }
}
