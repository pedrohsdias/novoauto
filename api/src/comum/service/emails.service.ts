import { Injectable } from '@nestjs/common';
import { BaseService } from '../../base/base.service';
import { EmailsEntity } from '../entity/email.entity';
import { EmailsRepository } from '../repository/emails.repository';

@Injectable()
export class EmailsService extends BaseService<EmailsEntity> {
  constructor(protected readonly repository: EmailsRepository) {
    super(repository);
  }
}
