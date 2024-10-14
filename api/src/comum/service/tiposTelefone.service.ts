import { Injectable } from '@nestjs/common';
import { BaseService } from '../../base/base.service';
import { TiposTelefoneEntity } from '../entity/tiposTelefone.entity';
import { TiposTelefoneRepository } from '../repository/tiposTelefone.repository';

@Injectable()
export class TiposTelefoneService extends BaseService<TiposTelefoneEntity> {
  constructor(protected readonly repository: TiposTelefoneRepository) {
    super(repository);
  }
}
