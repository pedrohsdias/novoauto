import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from '../../base/base.entity';
import { TipoTelefoneEntity } from './tipoTelefone.entity';
import { ContatoEntity } from './contato.entity';

@Entity('telefones')
export class TelefoneEntity extends BaseEntity {
  @Column({ length: 15 })
  numero: string;

  @Column({ name: 'contato_id' })
  contatoId: string;
  @ManyToOne(() => ContatoEntity, (contato) => contato.telefones, {
    nullable: false,
  })
  @JoinColumn({ name: 'contato_id' })
  contato: ContatoEntity;

  @ManyToOne(() => TipoTelefoneEntity, (tipoTelefone) => tipoTelefone.telefones)
  @JoinColumn({ name: 'tipo_telefone_id' })
  tipo: TipoTelefoneEntity;
  @Column({ name: 'tipo_telefone_id' })
  tipoId: string;
}
