import {TipoFranquiaEnum} from '@/Types/enum/TipoFranquia.enum';
import {IPessoa} from '@/Types/models/pessoa.interface';
import {RowData} from "@/components/dataTable/table.types";

export interface IFranquiador extends RowData {
  id?: string; // UUID pode ser opcional
  apelido?: string;
  tipo?: TipoFranquiaEnum;
  linkLogo?: string;
  termoDtAceite?: Date;
  termoUsuarioAceite?: string;
  pessoaId?: string;
  pessoa?: IPessoa;
}