import {
  Entity,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TiposBloco } from './tipos-bloco.entity';
import { ModelosLaudoBlocos } from './modelos-laudo-blocos.entity';
import { BaseEntity } from '../../base.entity';


@Entity('blocos')
export class Blocos extends BaseEntity {
  @Column()
  nome: string;

  @ManyToOne(() => TiposBloco, (tipoBloco) => tipoBloco.blocos)
  tiposBloco: TiposBloco;

  @OneToMany(() => ModelosLaudoBlocos, (mlb) => mlb.blocos)
  modelosLaudoBlocos: ModelosLaudoBlocos[];
}
