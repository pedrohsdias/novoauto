import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from '../../base/base.entity';
import { TelefoneEntity } from './telefone.entity';

@Entity('tipos_telefone')
export class TipoTelefoneEntity extends BaseEntity {
  @Column({ length: 30 })
  descricao: string;
  @OneToMany(() => TelefoneEntity, (telefone) => telefone.tipo)
  telefones: TelefoneEntity[];
}
