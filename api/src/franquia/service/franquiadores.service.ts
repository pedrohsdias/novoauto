import { Injectable } from '@nestjs/common';
import { BaseService } from '../../base/base.service';
import { FranquiadoresEntity } from '../entity/franquiadores.entity';
import { FranquiadoresRepository } from '../repository/franquiadores.repository';

@Injectable()
export class FranquiadoresService extends BaseService<FranquiadoresEntity> {
  constructor(protected readonly repository: FranquiadoresRepository) {
    super(repository);
  }
}
