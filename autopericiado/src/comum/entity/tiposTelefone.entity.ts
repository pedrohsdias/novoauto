import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from '../../base/base.entity';
import { TelefonesEntity } from './telefones.entity';

@Entity('tipos_telefone')
export class TiposTelefoneEntity extends BaseEntity {
  @Column({ length: 30 })
  descricao: string;
  @OneToMany(() => TelefonesEntity, (telefone) => telefone.tipo)
  telefones: TelefonesEntity[];
}
