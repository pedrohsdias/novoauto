import { Entity, Column, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { TiposBloco } from './tipos-bloco.entity';
import { ModelosVistoriaBlocos } from './modelos-vistoria-blocos.entity';
import { BaseEntity } from '../../base.entity';

@Entity('blocos')
export class Blocos extends BaseEntity {
  @Column()
  nome: string;

  @ManyToOne(() => TiposBloco, (tipoBloco) => tipoBloco.blocos)
  @JoinColumn({ name: 'tipos_blocos_id' })
  tiposBloco: TiposBloco;

  @OneToMany(() => ModelosVistoriaBlocos, (mlb) => mlb.blocos)
  modelosVistoriaBlocos: ModelosVistoriaBlocos[];
}
