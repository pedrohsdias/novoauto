import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';

import { BaseEntity } from '../../base/base.entity';
import { PessoasEntity } from '../../comum/entity/pessoas.entity';
import { UnidadesEntity } from './unidades.entity';
@Entity('franquiadores')
export class FranquiadoresEntity extends BaseEntity {
  @Column({
    comment: 'nome para exibição em tela, é o msm valor do homônimo em pessoa',
  })
  apelido: string;

  @Column({ name: 'link_logo' })
  linkLogo: string;

  @Column({ name: 'termo_data_aceite', nullable: true })
  termoDtAceite: Date;

  @Column({ name: 'termo_usuario_id', nullable: true })
  termoUsuarioAceite: string;

  @ManyToOne(() => PessoasEntity, (pessoa) => pessoa.franquiadores)
  @JoinColumn({ name: 'pessoa_id' })
  pessoa: PessoasEntity;

  @OneToMany(() => UnidadesEntity, (unidade) => unidade.franquiador)
  unidades: UnidadesEntity[];
}
