import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from '../../base/base.entity';
import { MunicipiosEntity } from './municipios.entity';

@Entity('estados')
export class EstadosEntity extends BaseEntity {
  @Column({ length: 70 })
  nome: string;

  @Column({ length: 2 })
  uf: string;

  @OneToMany(() => MunicipiosEntity, (municipio) => municipio.estado)
  municipios: MunicipiosEntity[];
}
