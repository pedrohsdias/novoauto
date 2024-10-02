import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseService } from '../../base.service';
import { ModeloLaudo } from '../entity/modelo-laudo.entity';

@Injectable()
export class ModeloLaudoService extends BaseService<ModeloLaudo> {
  constructor(
    @InjectRepository(ModeloLaudo)
    private readonly modeloLaudoRepository: Repository<ModeloLaudo>,
  ) {
    super(modeloLaudoRepository);
  }
}
