import { Entity, Column, OneToMany } from 'typeorm';
import { Blocos } from './blocos.entity';
import { BaseEntity } from '../../base/base.entity';

@Entity('tipos_bloco')
export class TiposBloco extends BaseEntity {
  @Column()
  nome: string;

  @Column()
  descricao: string;

  @OneToMany(() => Blocos, (blocos) => blocos.tiposBloco)
  blocos: Blocos[];
}
