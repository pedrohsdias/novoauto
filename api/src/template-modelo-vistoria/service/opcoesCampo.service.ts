import { Injectable } from '@nestjs/common';
import { BaseService } from '../../base/base.service';
import { OpcoesCampoEntity } from '../entity/opcoesCampo.entity';
import { OpcoesCampoRepository } from '../repository/opcoesCampo.repository';

@Injectable()
export class OpcoesCampoService extends BaseService<OpcoesCampoEntity> {
  constructor(protected readonly repository: OpcoesCampoRepository) {
    super(repository);
  }
}
