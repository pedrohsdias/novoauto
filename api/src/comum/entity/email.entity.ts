import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from '../../base/base.entity';
import { ContatoEntity } from './contato.entity';

@Entity('emails')
export class EmailsEntity extends BaseEntity {
  @Column({ length: 15 })
  email: string;
  @Column({ name: 'eh_principal' })
  ehPrincipal: boolean;

  @ManyToOne(() => ContatoEntity, (contato) => contato.emails, {
    nullable: false,
  })
  @JoinColumn({ name: 'contato_id' })
  contato: ContatoEntity;
  @Column({ name: 'contato_id' })
  contatoId: string;
}
