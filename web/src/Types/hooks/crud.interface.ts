export interface UseCrudService <T> {
  listar: (
    page?: number|null,
    rowsPerPage?: number|null,
    orderBy?:string|null,
    order?:string|null,
    filter?:string|null
  ) => Promise<T[]>;
  detalhar: (id: number) => Promise<T>;
  criar: (params) => Promise<T>;
  editar: (id: number, params) => Promise<T>;
}