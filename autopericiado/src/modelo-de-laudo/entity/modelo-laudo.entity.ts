import { Entity, Column, OneToMany } from 'typeorm';
import { Campos } from './campos.entity';
import { ModelosLaudoBlocos } from './modelos-laudo-blocos.entity';
import { BaseEntity } from '../../base.entity';

@Entity('modelos_laudo')
export class ModeloLaudo extends BaseEntity {
  @Column()
  nome: string;

  @OneToMany(() => Campos, (campo) => campo.modeloLaudo)
  campos: Campos[];

  @OneToMany(() => ModelosLaudoBlocos, (mlb) => mlb.modeloLaudo)
  modelosLaudoBlocos: ModelosLaudoBlocos[];
}
