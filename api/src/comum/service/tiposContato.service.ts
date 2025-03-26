import { Injectable } from '@nestjs/common';
import { BaseService } from '../../base/base.service';
import { TipoContatoEntity } from '../entity/tipoContato.entity';
import { TiposContatoRepository } from '../repository/tiposContato.repository';

@Injectable()
export class TiposContatoService extends BaseService<TipoContatoEntity> {
  constructor(protected readonly repository: TiposContatoRepository) {
    super(repository);
  }
}
