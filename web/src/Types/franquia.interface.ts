import { TipoFranquiaEnum } from '@/Types/enum/TipoFranquia.enum';
import { IPessoa } from '@/Types/pessoa.interface';

export interface IFranquiador {
  id?: string; // UUID pode ser opcional
  apelido?: string;
  tipo?: TipoFranquiaEnum;
  linkLogo?: string;
  termoDtAceite?: Date;
  termoUsuarioAceite?: string;
  pessoaId?: string;
  pessoa?: IPessoa;
}