import { Injectable } from '@nestjs/common';
import { BaseService } from '../../base/base.service';
import { BlocosRepository } from '../repository/blocos.repository';
import { BlocosEntity } from '../entity/blocos.entity';

@Injectable()
export class BlocosService extends BaseService<BlocosEntity> {
  constructor(protected readonly repository: BlocosRepository) {
    super(repository);
  }
}
