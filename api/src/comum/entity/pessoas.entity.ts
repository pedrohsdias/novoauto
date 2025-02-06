import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from '../../base/base.entity';
import { EnderecosEntity } from './enderecos.entity';
import { TelefonesEntity } from './telefones.entity';
import { ClienteFinalEntity } from '../../vistoria/entity/clienteFinal.entity';
import { TipoPessoaEnum } from '../enum/tipoPessoa.enum';
import { ClienteEntity } from '../../cliente/entity/cliente.entity';

@Entity('pessoa')
export class PessoasEntity extends BaseEntity {
  @Column({
    length: 150,
    nullable: true,
    comment: 'Apelido para pf e nome fantasia para pj',
  })
  apelido: string;

  @Column({
    length: 200,
    name: 'nome_formal',
    comment: 'Nome como no RG ou razão social para pj',
  })
  nomeFormal: string;

  @Column({ length: 18, nullable: true, comment: 'CPF ou CNPJ' })
  documento: string;

  @Column({
    name: 'tipo_documento',
    type: 'enum',
    enum: TipoPessoaEnum,
    default: TipoPessoaEnum.PJ,
  })
  tipo: TipoPessoaEnum;

  @OneToMany(() => EnderecosEntity, (endereco) => endereco.pessoa)
  enderecos: EnderecosEntity[];

  @OneToMany(() => TelefonesEntity, (telefone) => telefone.pessoa)
  telefones: TelefonesEntity[];

  @OneToMany(() => ClienteFinalEntity, (clienteFinal) => clienteFinal.pessoa)
  clienteFinal: ClienteFinalEntity[];

  @OneToMany(() => ClienteEntity, (cliente) => cliente.pessoa)
  cliente: ClienteEntity[];
}
