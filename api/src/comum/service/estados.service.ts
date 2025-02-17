import { Injectable } from '@nestjs/common';
import { BaseService } from '../../base/base.service';
import { EstadoEntity } from '../entity/estado.entity';
import { EstadosRepository } from '../repository/estados.repository';

@Injectable()
export class EstadosService extends BaseService<EstadoEntity> {
  constructor(protected readonly repository: EstadosRepository) {
    super(repository);
  }
}
