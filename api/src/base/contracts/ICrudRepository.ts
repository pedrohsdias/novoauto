export interface ICrudRepository<T> {
  getAutoCompleteColumms(): string[];
  getRelationsToLoadOnMany(): string[];
  getRelationsToLoadOnOne(): string[];
  findById(id: string): Promise<T | null>;
  saveEntity(entity: T): Promise<T>;
  removeEntity(entity: T): Promise<void>;
  softDeleteEntity(id: string): Promise<void>;
}
