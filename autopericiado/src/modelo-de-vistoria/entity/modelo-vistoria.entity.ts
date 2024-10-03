import { Entity, Column, OneToMany } from 'typeorm';
import { Campos } from './campos.entity';
import { ModelosVistoriaBlocos } from './modelos-vistoria-blocos.entity';
import { BaseEntity } from '../../base.entity';

@Entity('modelos_vistoria')
export class ModeloVistoria extends BaseEntity {
  @Column()
  nome: string;

  @OneToMany(() => Campos, (campo) => campo.modeloVistoria)
  campos: Campos[];

  @OneToMany(() => ModelosVistoriaBlocos, (mlb) => mlb.modeloVistoria)
  modelosVistoriaBlocos: ModelosVistoriaBlocos[];
}
