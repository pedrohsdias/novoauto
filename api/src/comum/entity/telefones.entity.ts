import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from '../../base/base.entity';
import { TiposTelefoneEntity } from './tiposTelefone.entity';
import { PessoasEntity } from './pessoas.entity';

@Entity('telefones')
export class TelefonesEntity extends BaseEntity {
  @Column({ length: 15 })
  numero: string;

  @ManyToOne(() => PessoasEntity, (pessoa) => pessoa.telefones, {
    nullable: false,
  })
  @JoinColumn({ name: 'pessoa_id' })
  pessoa: PessoasEntity;

  @ManyToOne(
    () => TiposTelefoneEntity,
    (tipoTelefone) => tipoTelefone.telefones,
  )
  @JoinColumn({ name: 'tipo_telefone_id' })
  tipo: TiposTelefoneEntity;
}
