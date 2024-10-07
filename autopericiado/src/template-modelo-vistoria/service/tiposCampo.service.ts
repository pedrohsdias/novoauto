import { Injectable } from '@nestjs/common';
import { BaseService } from '../../base/base.service';
import { TiposCampoRepository } from '../repository/tiposCampo.repository';
import { TiposCampo } from '../entity/tiposCampo.entity';

@Injectable()
export class TiposCampoService extends BaseService<TiposCampo> {
  constructor(protected readonly repository: TiposCampoRepository) {
    super(repository);
  }
}
