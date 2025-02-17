import { Injectable } from '@nestjs/common';
import { BaseService } from '../../base/base.service';
import { TipoTelefoneEntity } from '../entity/tipoTelefone.entity';
import { TiposTelefoneRepository } from '../repository/tiposTelefone.repository';

@Injectable()
export class TiposTelefoneService extends BaseService<TipoTelefoneEntity> {
  constructor(protected readonly repository: TiposTelefoneRepository) {
    super(repository);
  }
}
