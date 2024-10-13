import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';

import { BaseEntity } from '../../base/base.entity';
import { PessoasEntity } from '../../comum/entity/pessoas.entity';
import { UnidadesEntity } from './unidades.entity';
@Entity('franquiadores')
export class FranquiadoresEntity extends BaseEntity {
  @Column()
  apelido: string;

  @Column({ name: 'link_logo' })
  linkLogo: string;

  @Column({ name: 'termo_data_aceite' })
  termoDtAceite: Date;

  @Column({ name: 'termo_usuario_id' })
  termoUsuarioAceite: string;

  @ManyToOne(() => PessoasEntity, (pessoa) => pessoa.franquiadores)
  @JoinColumn({ name: 'pessoa_id' })
  pessoa: PessoasEntity;

  @OneToMany(() => UnidadesEntity, (unidade) => unidade.franquiador)
  unidades: UnidadesEntity[];
}
