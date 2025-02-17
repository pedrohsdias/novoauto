import { Injectable } from '@nestjs/common';
import { BaseService } from '../../base/base.service';
import { OpcaoCampoEntity } from '../entity/opcaoCampo.entity';
import { OpcoesCampoRepository } from '../repository/opcoesCampo.repository';

@Injectable()
export class OpcoesCampoService extends BaseService<OpcaoCampoEntity> {
  constructor(protected readonly repository: OpcoesCampoRepository) {
    super(repository);
  }
}
