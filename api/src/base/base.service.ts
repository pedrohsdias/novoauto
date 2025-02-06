import { Injectable } from '@nestjs/common';
import { BaseRepository } from './base.repository';
import { BaseEntity } from './base.entity';
import { BaseDto } from './base.dto';
import {PaginateOptions} from '../comum/types/paginateOptions.type';
@Injectable()
export class BaseService<T extends BaseEntity> {
  constructor(protected readonly repository: BaseRepository<T>) {}

  async findAll(options: PaginateOptions): Promise<T[]> {
    
    const { rowsPerPage, page, orderBy, order } = options;
    const query = this.repository.createQueryBuilder('entity');
    query.skip(page * rowsPerPage).take(rowsPerPage)
    return query.getMany();
  }

  async findById(id: string): Promise<T | null> {
    return await this.repository.findById(id);
  }

  async create(createDto: BaseDto): Promise<T> {
    const entity = await this.repository.create();
    Object.assign(entity, createDto);
    return await this.repository.saveEntity(entity);
  }

  async update(id: string, udpateDto: BaseDto): Promise<T> {
    const existingEntity = await this.findById(id);
    if (!existingEntity) {
      throw new Error(`Entity with id ${id} not found`);
    }
    Object.assign(existingEntity, udpateDto);
    return await this.repository.saveEntity(existingEntity);
  }

  async delete(id: string, soft = true): Promise<void> {
    const entity = await this.findById(id);
    if (entity) {
      if (soft) {
        await this.repository.softDeleteEntity(id);
      } else {
        await this.repository.removeEntity(entity);
      }
    } else {
      throw new Error(`Entity with id ${id} not found`);
    }
  }
}
