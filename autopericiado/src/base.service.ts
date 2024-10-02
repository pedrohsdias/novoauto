import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { BaseEntity } from './base.entity';

@Injectable()
export class BaseService<T extends BaseEntity> {
  constructor(private readonly repository: Repository<T>) {}
  
  async findAll(): Promise<T[]> {
    return this.repository.find();
  }
  
  async findOne(id: number): Promise<T | null> {
    return this.repository.findOneBy({ id });
  }
  
  async create(data: Partial<T>): Promise<T> {
    const entity = this.repository.create(data);
    return this.repository.save(entity);
  }
  
  async update(id: number, data: Partial<T>): Promise<T | null> {
    const entity = await this.repository.findOneBy({ id });
    if (!entity) {
      return null;
    }
    Object.assign(entity, data);
    return this.repository.save(entity);
  }
  
  async delete(id: number): Promise<boolean> {
    const result = await this.repository.softDelete(id);
    return result.affected > 0;
  }
  
  async restore(id: number): Promise<boolean> {
    const result = await this.repository.restore(id);
    return result.affected > 0;
  }
}
