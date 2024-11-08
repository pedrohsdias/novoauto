export type order = 'asc' | 'desc'

export interface headerCell {
  id: string,
  numeric: boolean, //default false
  disablePadding: boolean, //default true
  label: string,
}
export interface RowData {
  id: string,
  [key: string]: any;
}