export interface PaginateOptions {
  rowsPerPage: number;
  page: number;
  orderBy?: string;
  order?: 'asc' | 'desc';
}