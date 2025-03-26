import { Injectable } from '@nestjs/common';
import { BaseService } from '../../base/base.service';
import { ContatoEntity } from '../entity/contato.entity';
import { ContatosRepository } from '../repository/contatos.repository';
import { TelefonesService } from './telefones.service';
import { EmailsService } from './emails.service';
import { EnderecosService } from './enderecos.service';
import { BaseModelDto } from '../../base/dto/baseModel.dto';
import {
  CreateContatoDto,
  UpdateContatoDto,
} from '../dto/requests/requestsContato.dto';
import { plainToInstance } from 'class-transformer';
@Injectable()
export class ContatosService extends BaseService<ContatoEntity> {
  constructor(
    protected readonly repository: ContatosRepository,
    protected readonly telefoneService: TelefonesService,
    protected readonly emailService: EmailsService,
    protected readonly enderecoService: EnderecosService,
  ) {
    super(repository);
  }

  async create2(createDto: BaseModelDto): Promise<UpdateContatoDto> {
    const contatoDto = createDto as CreateContatoDto;
    const contato = await super.create(createDto);
    this.createRelations(contatoDto.telefones, this.telefoneService, contato);
    this.createRelations(contatoDto.enderecos, this.enderecoService, contato);
    this.createRelations(contatoDto.emails, this.emailService, contato);

    return plainToInstance(UpdateContatoDto, contato, {
      excludeExtraneousValues: true,
    });
  }

  private createRelations(
    lista: any[],
    service: BaseService<any>,
    contato: ContatoEntity,
  ) {
    lista.forEach((item) => {
      item.contato = contato;
      service.create(item);
    });
  }
}
