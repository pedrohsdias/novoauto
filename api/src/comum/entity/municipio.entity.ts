import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { BaseEntity } from '../../base/base.entity';
import { EnderecoEntity } from './endereco.entity';
import { EstadoEntity } from './estado.entity';

@Entity('municipios')
export class MunicipioEntity extends BaseEntity {
  @Column({ length: 150 })
  nome: string;

  @Column({ name: 'estado_id' })
  estadoId: string;

  @ManyToOne(() => EstadoEntity, (estado) => estado.municipios)
  @JoinColumn({ name: 'estado_id' })
  estado: EstadoEntity;
  @OneToMany(() => EnderecoEntity, (endereco) => endereco.municipio)
  enderecos: EnderecoEntity[];
}
