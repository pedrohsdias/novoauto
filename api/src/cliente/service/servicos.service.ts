import { Injectable } from '@nestjs/common';
import { BaseService } from '../../base/base.service';
import { ServicosEntity } from '../entity/servicos.entity';
import { ServicosRepository } from '../repository/servicos.repository';

@Injectable()
export class ServicosService extends BaseService<ServicosEntity> {
  constructor(protected readonly repository: ServicosRepository) {
    super(repository);
  }
}
