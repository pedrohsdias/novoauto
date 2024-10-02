import { Repository, EntityTarget, DataSource } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BaseRepository<T extends BaseEntity> extends Repository<T> {
  constructor(
    private readonly entity: EntityTarget<T>,
    private readonly dataSource: DataSource,
  ) {
    super(entity, dataSource.createEntityManager());
  }

  /**
   * Encontra todas as entidades do tipo T
   */
  findAll(): Promise<T[]> {
    return this.find();
  }

  /**
   * Encontra uma entidade por ID
   * @param id
   */
  findById(id: number): Promise<T | null> {
    return this.findOne({ where: { id } });
  }

  /**
   * Cria ou atualiza uma entidade
   * @param entity
   */
  async saveEntity(entity: T): Promise<T> {
    return await this.save(entity);
  }

  /**
   * Remove uma entidade
   * @param entity
   */
  async removeEntity(entity: T): Promise<void> {
    await this.remove(entity);
  }

  /**
   * Soft delete de uma entidade
   * @param id
   */
  async softDeleteEntity(id: number): Promise<void> {
    await this.softDelete(id);
  }
}
