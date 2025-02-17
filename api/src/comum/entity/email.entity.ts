import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from '../../base/base.entity';
import { TipoTelefoneEntity } from './tipoTelefone.entity';
import { ContatoEntity } from './contato.entity';

@Entity('emails')
export class EmailsEntity extends BaseEntity {
  @Column({ length: 15 })
  numero: string;

  @ManyToOne(() => ContatoEntity, (contato) => contato.emails, {
    nullable: false,
  })
  @JoinColumn({ name: 'contato_id' })
  contato: ContatoEntity;

  @ManyToOne(
    () => TipoTelefoneEntity,
    (tipoTelefone) => tipoTelefone.telefones,
  )
  @JoinColumn({ name: 'tipo_telefone_id' })
  tipo: TipoTelefoneEntity;
}
