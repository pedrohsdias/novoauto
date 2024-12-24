import {IPessoa} from '@/Types/models/pessoa.interface';
import {RowData} from "@/components/dataTable/table.types";
import {IFranquiador} from "@/Types/models/franquia.interface";

export interface IUnidade extends RowData {
  id?: string; // UUID pode ser opcional
  apelido?: string;
  franquiador?: IFranquiador;
  pessoaId?: string;
  pessoa?: IPessoa;
}