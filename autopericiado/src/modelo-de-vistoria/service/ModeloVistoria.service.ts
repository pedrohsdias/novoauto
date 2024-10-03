import { Injectable } from '@nestjs/common';
import { ModeloVistoriaRepository } from '../repository/ModeloVistoria.repository';
import { ModeloVistoria } from '../entity/modelo-vistoria.entity';
import { BaseService } from '../../base.service';

@Injectable()
export class ModeloVistoriaService extends BaseService<ModeloVistoria> {
  constructor(
    protected readonly modeloVistoriaRepository: ModeloVistoriaRepository,
  ) {
    super(modeloVistoriaRepository); // Passa o ModeloVistoriaRepository para o BaseService
  }

  // Métodos específicos do serviço ModeloVistoria podem ser adicionados aqui
}
