import { Injectable } from '@nestjs/common';
import { BaseRepository } from './base.repository';
import { BaseEntity } from './base.entity';
import { BaseModelDto } from './dto/baseModel.dto';
import { BaseRequestFindAllDto } from './dto/baseRequestFindAll.dto';
import { RequestAutoCompleteDto } from '../comum/dto/requestAutoComplete.dto';

@Injectable()
export class BaseService<T extends BaseEntity> {
  constructor(protected readonly repository: BaseRepository<T>) {}

  async autoComplete(options: RequestAutoCompleteDto): Promise<T[]> {
    const query = this.repository.autoComplete(options);

    return query.getMany();
  }

  async findAll(options: BaseRequestFindAllDto): Promise<T[]> {
    return await this.repository.findAll(options);
  }

  async findById(id: string): Promise<T | null> {
    return await this.repository.findById(id);
  }

  async create(createDto: BaseModelDto): Promise<T> {
    const entity = await this.repository.create();
    Object.assign(entity, createDto);
    return await this.repository.saveEntity(entity);
  }

  async update(id: string, udpateDto: BaseModelDto): Promise<T> {
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
