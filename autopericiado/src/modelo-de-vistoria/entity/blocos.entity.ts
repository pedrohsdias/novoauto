import {
  Entity,
  Column,
  ManyToOne,
  OneToMany,
  JoinColumn,
  ManyToMany,
} from 'typeorm';
import { TiposBloco } from './tipos-bloco.entity';
import { BaseEntity } from '../../base/base.entity';
import { Campos } from './campos.entity';
import { ModelosVistoria } from './modelos-vistoria.entity';

@Entity('blocos')
export class Blocos extends BaseEntity {
  @Column()
  nome: string;

  @ManyToOne(() => TiposBloco, (tipoBloco) => tipoBloco.blocos)
  @JoinColumn({ name: 'tipo_bloco_id' })
  tiposBloco: TiposBloco;

  @ManyToMany(() => ModelosVistoria, (modeloVistoria) => modeloVistoria.blocos)
  modelosVistoria: ModelosVistoria[];

  @OneToMany(() => Campos, (campo) => campo.bloco)
  campos: Campos[];
}
