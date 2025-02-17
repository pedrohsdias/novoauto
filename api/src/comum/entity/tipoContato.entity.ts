import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from '../../base/base.entity';
import { TelefoneEntity } from './telefone.entity';
import { ContatoEntity } from './contato.entity';

@Entity('tipos_contato')
export class TipoContatoEntity extends BaseEntity {
  @Column({ length: 30 })
  descricao: string;
  @OneToMany(() => ContatoEntity, (contato) => contato.tipo)
  contatos: ContatoEntity[];
}
