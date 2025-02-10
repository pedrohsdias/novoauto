import { Repository, EntityTarget, DataSource, FindOneOptions, SelectQueryBuilder } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Injectable } from '@nestjs/common';
import { BaseRequestFindAllDto } from './dto/baseRequestFindAll.dto';
import { RequestAutoCompleteDto } from '../comum/dto/requestAutoComplete.dto';

@Injectable()
export class BaseRepository<T extends BaseEntity> extends Repository<T> {

  protected autoCompleteFields: string[] = [];

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

  autoComplete(options: RequestAutoCompleteDto): SelectQueryBuilder<T> {
    const { param } = options
    const query = this.paginate(options)

    if(param) {
      this.autoCompleteFields.forEach(campo => {
        query.where(`${campo} ILIKE :search`, { search: `%${param}%` });
      })
    }

    return query;
  }

  paginate(options: BaseRequestFindAllDto): SelectQueryBuilder<T> {
    const { rowsPerPage, page, orderBy, order = 'asc' } = options;
    const query = this.createQueryBuilder();

    if (orderBy) {
      query.orderBy(orderBy, order.toUpperCase() as 'ASC' | 'DESC');
    }

    query.skip(page * rowsPerPage).take(rowsPerPage);

    return query;
  }
}
