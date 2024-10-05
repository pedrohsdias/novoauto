import { Entity, Column, OneToMany } from 'typeorm';
import { Campos } from './campos.entity';
import { BaseEntity } from '../../base.entity';

@Entity('tipos_campo')
export class TiposCampo extends BaseEntity {
  @Column()
  nome: string;

  @OneToMany(() => Campos, (campo) => campo.tiposCampo)
  campos: Campos[];
}
