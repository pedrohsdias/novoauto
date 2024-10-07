import { Injectable } from '@nestjs/common';
import { BaseService } from '../../base/base.service';
import { TiposBloco } from '../entity/tiposBloco.entity';
import { TiposBlocoRepository } from '../repository/tiposBloco.repository';

@Injectable()
export class TiposBlocoService extends BaseService<TiposBloco> {
  constructor(protected readonly repository: TiposBlocoRepository) {
    super(repository); // Passa o ModeloVistoriaRepository para o BaseService
  }
}
