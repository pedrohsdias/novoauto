import { Injectable } from '@nestjs/common';
import { ModeloVistoriaRepository } from '../repository/modeloVistoria.repository';
import { ModelosVistoria } from '../entity/modelos-vistoria.entity';
import { BaseService } from '../../base/base.service';

@Injectable()
export class ModeloVistoriaService extends BaseService<ModelosVistoria> {
  constructor(protected readonly repository: ModeloVistoriaRepository) {
    super(repository); // Passa o ModeloVistoriaRepository para o BaseService
  }

  // Métodos específicos do serviço ModeloVistoria podem ser adicionados aqui
}
