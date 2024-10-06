import { Entity, Column, OneToMany, ManyToMany, JoinTable } from 'typeorm';
import { ModelosVistoriaBlocos } from './modelos-vistoria-blocos.entity';
import { BaseEntity } from '../../base.entity';
import { Blocos } from './blocos.entity';

@Entity('modelos_vistoria')
export class ModelosVistoria extends BaseEntity {
  @Column()
  nome: string;

  @OneToMany(() => ModelosVistoriaBlocos, (mlb) => mlb.modeloVistoria)
  modelosVistoriaBlocos: ModelosVistoriaBlocos[];

  @ManyToMany(() => Blocos, (bloco) => bloco.modelosVistoria)
  @JoinTable({
    name: 'modelos_vistoria_blocos',
    joinColumn: { name: 'modelo_vistoria_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'bloco_id', referencedColumnName: 'id' },
  })
  blocos: Blocos[];
}
