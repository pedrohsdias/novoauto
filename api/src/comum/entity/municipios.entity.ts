import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { BaseEntity } from '../../base/base.entity';
import { EnderecosEntity } from './enderecos.entity';
import { EstadosEntity } from './estados.entity';

@Entity('municipios')
export class MunicipiosEntity extends BaseEntity {
  @Column({ length: 150 })
  nome: string;
  @Column({ name: 'estado_id' })
  estadoId: number;
  @ManyToOne(() => EstadosEntity, (estado) => estado.municipios)
  @JoinColumn({ name: 'estado_id' })
  estado: EstadosEntity;
  @OneToMany(() => EnderecosEntity, (endereco) => endereco.municipio)
  enderecos: EnderecosEntity[];
}
