import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany } from 'typeorm';
import { BaseEntity } from '../../base/base.entity';
import { OrdemServicoEntity } from './ordemServico.entity';
import { ClienteEntity } from '../../cliente/entity/cliente.entity';
import { TipoPessoaEnum } from '../../comum/enum/tipoPessoa.enum';
import { ContatoEntity } from '../../comum/entity/contato.entity';

@Entity('clientes_finais',{comment:'Cliente do nosso cliente, replica a estrutura de pessoa porque não pode ser reaproveitado'})
export class ClienteFinalEntity extends BaseEntity {

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

  @Column({ length: 18, nullable: true, comment: 'CPF ou CNPJ' })
  documento: string;

  @Column({
    name: 'tipo_documento',
    type: 'enum',
    enum: TipoPessoaEnum,
    default: TipoPessoaEnum.PJ,
  })
  tipo: TipoPessoaEnum;

  @OneToMany(() => OrdemServicoEntity, (os) => os.clienteFinal)
  ordensServico: OrdemServicoEntity[];

  @ManyToMany(() => ClienteEntity, (cliente) => cliente.clientesFinais)
  @JoinTable({
    name: 'clientes_clientes_finais', // Nome da tabela intermediária
    joinColumn: { name: 'cliente_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'cliente_final_id', referencedColumnName: 'id' },
  })
  clientes: ClienteEntity[];

  @OneToMany(() => ContatoEntity, (contato) => contato.clienteFinal)
  contatos: ContatoEntity[];
}
