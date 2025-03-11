import { Injectable } from '@nestjs/common';
import { BaseService } from '../../base/base.service';
import { ContatoEntity } from '../entity/contato.entity';
import { ContatosRepository } from '../repository/contatos.repository';
import { TelefonesService } from './telefones.service';
import { EmailsService } from './emails.service';
import { EnderecosService } from './enderecos.service';

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
}
