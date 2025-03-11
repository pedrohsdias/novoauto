import { Injectable } from '@nestjs/common';
import { BaseRepository } from '../../base/base.repository';
import { DataSource } from 'typeorm';
import { EmailsEntity } from '../entity/email.entity';

@Injectable()
export class EmailsRepository extends BaseRepository<EmailsEntity> {
  constructor(dataSource: DataSource) {
    super(EmailsEntity, dataSource, EmailsEntity, 'emailsEntity');
  }

  getAutoCompleteColumms(): string[] {
    return [];
  }

  getRelationsToLoadOnMany(): string[] {
    return [];
  }

  getRelationsToLoadOnOne(): string[] {
    return [];
  }
}
