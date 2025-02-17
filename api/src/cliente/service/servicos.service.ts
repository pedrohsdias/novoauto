import { Injectable } from '@nestjs/common';
import { BaseService } from '../../base/base.service';
import { ServicoEntity } from '../entity/servico.entity';
import { ServicosRepository } from '../repository/servicos.repository';

@Injectable()
export class ServicosService extends BaseService<ServicoEntity> {
  constructor(protected readonly repository: ServicosRepository) {
    super(repository);
  }
}
