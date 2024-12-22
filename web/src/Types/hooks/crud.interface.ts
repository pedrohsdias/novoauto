export interface UseCrudService <T> {
  listar: (page?: number, rowsPerPage?: number) => Promise<T[]>;
  detalhar: (id: number) => Promise<T>;
  criar: (params) => Promise<T>;
  editar: (id: number, params) => Promise<T>;
}