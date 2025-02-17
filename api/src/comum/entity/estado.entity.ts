import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from '../../base/base.entity';
import { MunicipioEntity } from './municipio.entity';

@Entity('estados')
export class EstadoEntity extends BaseEntity {
  @Column({ length: 70 })
  nome: string;

  @Column({ length: 2 })
  uf: string;

  @OneToMany(() => MunicipioEntity, (municipio) => municipio.estado)
  municipios: MunicipioEntity[];
}
