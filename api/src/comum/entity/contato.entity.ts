import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { BaseEntity } from '../../base/base.entity';
import { EnderecoEntity } from './endereco.entity';
import { TelefoneEntity } from './telefone.entity';
import { EmailsEntity } from './email.entity';
import { ClienteFinalEntity } from '../../vistoria/entity/clienteFinal.entity';
import { PessoaEntity } from './pessoa.entity';
import { TipoContatoEntity } from './tipoContato.entity';

@Entity('contatos')
export class ContatoEntity extends BaseEntity {
  @ManyToOne(() => TipoContatoEntity, (tipoContato) => tipoContato.contatos)
  @JoinColumn({ name: 'tipo_contato_id' })
  tipo: TipoContatoEntity;
  @Column({ name: 'tipo_contato_id' })
  tipoId: string;

  @Column({ length: 70, nullable: true })
  descricao: string;

  @ManyToOne(
    () => ClienteFinalEntity,
    (clienteFinal) => clienteFinal.contatos,
    { nullable: true },
  )
  @JoinColumn({ name: 'cliente_final_id' })
  clienteFinal: ClienteFinalEntity;
  @Column({
    name: 'cliente_final_id',
    comment: 'Cliente final a quem esse contato pertence',
  })
  clienteFinalId: string;

  @ManyToOne(() => PessoaEntity, (pessoa) => pessoa.contatos, {
    nullable: true,
  })
  @JoinColumn({ name: 'pessoa_id' })
  pessoa: PessoaEntity;
  @Column({
    name: 'pessoa_id',
    comment: 'Cliente (pj) a quem esse contato pertence',
  })
  pessoaId: string;

  @ManyToOne(() => PessoaEntity, (pessoa) => pessoa.representa, {
    nullable: true,
  })
  @JoinColumn({ name: 'representante_id' })
  representante: PessoaEntity;
  @Column({
    name: 'representante_id',
    comment: 'Pessoa que representa esse contato, Ex: socio administrador',
  })
  representanteId: string;

  @OneToMany(() => EnderecoEntity, (endereco) => endereco.contato)
  enderecos: EnderecoEntity[];
  @OneToMany(() => TelefoneEntity, (telefone) => telefone.contato)
  telefones: TelefoneEntity[];
  @OneToMany(() => EmailsEntity, (email) => email.contato)
  emails: EmailsEntity[];
}
