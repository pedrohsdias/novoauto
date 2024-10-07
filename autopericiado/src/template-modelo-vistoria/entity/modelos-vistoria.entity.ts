import { Entity, Column, ManyToMany, JoinTable } from 'typeorm';
import { BaseEntity } from '../../base/base.entity';
import { Blocos } from './blocos.entity';

@Entity('modelos_vistoria')
export class ModelosVistoria extends BaseEntity {
  @Column()
  nome: string;

  @ManyToMany(() => Blocos, (bloco) => bloco.modelosVistoria)
  @JoinTable({
    name: 'modelos_vistoria_blocos',
    joinColumn: { name: 'modelo_vistoria_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'bloco_id', referencedColumnName: 'id' },
  })
  blocos: Blocos[];
}
