import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from '../../base/base.entity';
import { TipoPessoaEnum } from '../enum/tipoPessoa.enum';
import { ClienteEntity } from '../../cliente/entity/cliente.entity';
import { ContatoEntity } from './contato.entity';

@Entity('pessoa', {
  comment: 'Generalização para clientes que estão em mais de uma posição',
})
export class PessoaEntity extends BaseEntity {
  @Column({
    length: 150,
    nullable: true,
    comment: 'Apelido para pf e nome fantasia para pj',
  })
  nomeSocial: string;

  @Column({
    length: 200,
    name: 'nome_formal',
    comment: 'Nome como no RG ou razão social para pj',
  })
  nomeFormal: string;

  @Column({ length: 18, nullable: true, comment: 'CPF ou CNPJ', unique: true })
  documento: string;

  @Column({
    name: 'tipo_documento',
    type: 'enum',
    enum: TipoPessoaEnum,
    default: TipoPessoaEnum.PJ,
  })
  tipo: TipoPessoaEnum;

  @OneToMany(() => ClienteEntity, (cliente) => cliente.pessoa)
  cliente: ClienteEntity[];

  @OneToMany(() => ContatoEntity, (contato) => contato.pessoa)
  contatos: ContatoEntity[];
  @OneToMany(() => ContatoEntity, (contato) => contato.representante)
  representa: ContatoEntity[];
}
