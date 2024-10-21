import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';

import { BaseEntity } from '../../base/base.entity';
import { PessoasEntity } from '../../comum/entity/pessoas.entity';
import { UnidadesEntity } from './unidades.entity';
import { UsuariosEntity } from '../../auth/entity/usuario.entity';
import { TipoFranquiaEnum } from '../enum/tipoFranquia.enum';
@Entity('franquiadores')
export class FranquiadoresEntity extends BaseEntity {
  @Column({
    length: 150,
    comment: 'nome para exibição em tela, é o msm valor do homônimo em pessoa',
  })
  apelido: string;
  @Column({
    name: 'tipo_franquia',
    type: 'enum',
    enum: TipoFranquiaEnum,
    default: TipoFranquiaEnum.EMPRESA_UNICA,
    nullable: false,
  })
  tipo: TipoFranquiaEnum;

  @Column({ name: 'link_logo', length: 200 })
  linkLogo: string;

  @Column({ name: 'termo_data_aceite', nullable: true })
  termoDtAceite: Date;

  @Column({ name: 'termo_usuario_id', nullable: true })
  termoUsuarioAceite: string;

  @ManyToOne(() => PessoasEntity, (pessoa) => pessoa.franquiadores, {
    nullable: false,
  })
  @JoinColumn({ name: 'pessoa_id' })
  pessoa: PessoasEntity;

  @OneToMany(() => UnidadesEntity, (unidade) => unidade.franquiador)
  unidades: UnidadesEntity[];

  @OneToMany(() => UsuariosEntity, (usuario) => usuario.franquiador)
  usuarios: UnidadesEntity[];
}
