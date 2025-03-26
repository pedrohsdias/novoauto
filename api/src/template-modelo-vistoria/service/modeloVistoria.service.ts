import { Injectable } from '@nestjs/common';
import { ModeloVistoriaRepository } from '../repository/modeloVistoria.repository';
import { ModeloVistoriaEntity } from '../entity/modeloVistoria.entity';
import { BaseService } from '../../base/base.service';
import { CreateModeloVistoriaDto } from '../dto/requests/requestsModeloVistoria.dto';
import { BlocosRepository } from '../repository/blocos.repository';

@Injectable()
export class ModeloVistoriaService extends BaseService<ModeloVistoriaEntity> {
  constructor(
    protected readonly repository: ModeloVistoriaRepository,
    protected readonly blocosRepository: BlocosRepository,
  ) {
    super(repository); // Passa o ModeloVistoriaRepository para o BaseService
  }
  async create(
    createModeloVistoriaDto: CreateModeloVistoriaDto,
  ): Promise<ModeloVistoriaEntity> {
    const { nome, blocos } = createModeloVistoriaDto;

    // Criar o modelo de vistoria
    const modeloVistoria = this.repository.create({ nome });
    await this.repository.save(modeloVistoria);

    // Relacionar os blocos ao modelo de vistoria
    if (blocos && blocos.length > 0) {
      modeloVistoria.blocos = await this.blocosRepository.findByIds(blocos);
      await this.repository.save(modeloVistoria);
    }

    return modeloVistoria;
  }

  // Métodos específicos do serviço ModeloVistoria podem ser adicionados aqui
}
