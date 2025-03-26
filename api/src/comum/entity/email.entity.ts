import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from '../../base/base.entity';
import { ContatoEntity } from './contato.entity';

@Entity('emails')
export class EmailsEntity extends BaseEntity {
  @Column({ length: 150 })
  email: string;
  @Column({ name: 'eh_principal' })
  ehPrincipal: boolean;

  @Column({ name: 'contato_id', nullable: true })
  contatoId: string;
  @ManyToOne(() => ContatoEntity, (contato) => contato.emails)
  @JoinColumn({ name: 'contato_id' })
  contato: ContatoEntity;
}
