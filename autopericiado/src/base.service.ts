import { Injectable } from '@nestjs/common';
import { BaseRepository } from './base.repository';
import { BaseEntity } from './base.entity';

@Injectable()
export class BaseService<T extends BaseEntity> {
  constructor(protected readonly repository: BaseRepository<T>) {}

  async findAll(): Promise<T[]> {
    return await this.repository.findAll();
  }

  async findById(id: number): Promise<T | null> {
    return await this.repository.findById(id);
  }

  async create(entity: T): Promise<T> {
    return await this.repository.saveEntity(entity);
  }

  async update(entity: T): Promise<T> {
    return await this.repository.saveEntity(entity);
  }

  async delete(id: number, soft = true): Promise<void> {
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
