import {
  Repository,
  EntityTarget,
  DataSource,
  FindOneOptions,
  SelectQueryBuilder,
} from 'typeorm';
import { BaseEntity } from './base.entity';
import { Injectable } from '@nestjs/common';
import { BaseRequestFindAllDto } from './dto/baseRequestFindAll.dto';
import { RequestAutoCompleteDto } from '../comum/dto/requestAutoComplete.dto';
import { ICrudRepository } from './contracts/ICrudRepository';

@Injectable()
export abstract class BaseRepository<T extends BaseEntity>
  extends Repository<T>
  implements ICrudRepository<T>
{
  constructor(
    protected readonly entity: EntityTarget<T>,
    protected readonly dataSource: DataSource,
    private readonly entityClass: new () => T,
    public readonly tableAlias: string = 'entity',
  ) {
    super(entity, dataSource.createEntityManager());
  }

  abstract getAutoCompleteColumms(): string[];
  abstract getRelationsToLoadOnMany(): string[];
  abstract getRelationsToLoadOnOne(): string[];

  createInstance(): T {
    return new this.entityClass(); // Cria uma nova instância de T
  }

  findAll(options: BaseRequestFindAllDto): Promise<T[]> {
    const query = this.paginate(options);
    this.getRelationsToLoadOnMany().forEach((relationToLoad) => {
      query.leftJoinAndSelect(
        `${this.tableAlias}.${relationToLoad}`,
        `${relationToLoad}`,
      );
    });
    return query.getMany();
  }

  findById(id: string): Promise<T | null> {
    const options: FindOneOptions<T> = {
      where: { id } as any,
      relations: this.getRelationsToLoadOnOne(),
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
    const { param } = options;
    const query = this.paginate(options);

    if (param) {
      this.getAutoCompleteColumms().forEach((campo) => {
        query.where(`${campo} ILIKE :search`, { search: `%${param}%` });
      });
    }

    return query;
  }

  paginate(options: BaseRequestFindAllDto): SelectQueryBuilder<T> {
    const {
      rowsPerPage = 20,
      page = 1,
      orderBy = 'createdAt',
      order = 'asc',
    } = options;
    const query = this.createQueryBuilder(this.tableAlias);

    if (orderBy) {
      const validOrder: 'ASC' | 'DESC' =
        order.toLowerCase() === 'desc' ? 'DESC' : 'ASC';

      query.orderBy(`${this.tableAlias}.${orderBy}`, validOrder);
    }

    query.skip((page - 1) * rowsPerPage).take(rowsPerPage);

    return query;
  }
}
