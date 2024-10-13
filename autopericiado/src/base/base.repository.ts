import { Repository, EntityTarget, DataSource, FindOneOptions } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BaseRepository<T extends BaseEntity> extends Repository<T> {
  constructor(
    protected readonly entity: EntityTarget<T>,
    protected readonly dataSource: DataSource,
    private readonly entityClass: new () => T,
  ) {
    super(entity, dataSource.createEntityManager());
  }

  createInstance(): T {
    return new this.entityClass(); // Cria uma nova instância de T
  }

  findAll(): Promise<T[]> {
    return this.find();
  }

  findById(id: string): Promise<T | null> {
    const options: FindOneOptions<T> = {
      where: { id } as any, // 'as any' usado para contornar o erro de tipagem
    };
    return this.findOne(options);
  }

  async saveEntity(entity: T): Promise<T> {
    return await this.save(entity);
  }

  async removeEntity(entity: T): Promise<void> {
    await this.remove(entity);
  }

  async softDeleteEntity(id: string): Promise<void> {
    await this.softDelete(id);
  }
}
