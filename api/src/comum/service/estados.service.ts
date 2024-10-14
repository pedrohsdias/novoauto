import { Injectable } from '@nestjs/common';
import { BaseService } from '../../base/base.service';
import { EstadosEntity } from '../entity/estados.entity';
import { EstadosRepository } from '../repository/estados.repository';

@Injectable()
export class EstadosService extends BaseService<EstadosEntity> {
  constructor(protected readonly repository: EstadosRepository) {
    super(repository);
  }
}
