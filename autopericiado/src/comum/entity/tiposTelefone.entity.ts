import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from '../../base/base.entity';
import { TelefonesEntity } from './telefones.entity';

@Entity('tipos_telefone')
export class TiposTelefoneEntity extends BaseEntity {
  @Column()
  descricao: string;
  @OneToMany(() => TelefonesEntity, (telefone) => telefone.tipo)
  telefones: TelefonesEntity[];
}
