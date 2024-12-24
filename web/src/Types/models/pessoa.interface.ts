import { TipoPessoaEnum } from '@/Types/enum/TipoPesso.enum';
export interface IPessoa {
  id?: string
  apelido?: string;
  nomeFormal?: string;
  documento?: string;
  tipo?: TipoPessoaEnum.PJ;
}