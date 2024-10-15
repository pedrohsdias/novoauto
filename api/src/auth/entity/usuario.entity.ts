import {
  BeforeInsert,
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { BaseEntity } from '../../base/base.entity';
import * as bcrypt from 'bcrypt';
import { Exclude } from 'class-transformer';
import { PerfilUsuarioEnum } from '../enum/perfilUsuario.enum';
import { FranquiadoresEntity } from '../../franquia/entity/franquiadores.entity';
import { UnidadesEntity } from '../../franquia/entity/unidades.entity';
import { OrdensServicoEntity } from '../../vistoria/entity/ordensServico.entity';

@Entity('usuarios')
export class UsuariosEntity extends BaseEntity {
  @Column({ length: 150, nullable: false })
  nome: string;

  @Column({ length: 150, unique: true, nullable: false })
  email: string;

  @Column({
    name: 'perfil',
    type: 'enum',
    enum: PerfilUsuarioEnum,
    default: PerfilUsuarioEnum.USUARIO,
  })
  perfil: PerfilUsuarioEnum;

  @ManyToOne(() => FranquiadoresEntity, (franquiador) => franquiador.usuarios, {
    nullable: true,
  })
  @JoinColumn({ name: 'franquiador_id' })
  franquiador: FranquiadoresEntity;

  @ManyToMany(() => UnidadesEntity, (unidade) => unidade.usuarios)
  @JoinTable({
    name: 'usuarios_unidades',
    joinColumn: { name: 'usuario_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'unidade_id', referencedColumnName: 'id' },
  })
  unidades: UnidadesEntity[];

  @Exclude()
  @Column({ nullable: false })
  senha: string;

  @BeforeInsert()
  async hashSenha() {
    this.senha = await bcrypt.hash(this.senha, 10);
  }

  @OneToMany(() => OrdensServicoEntity, (os) => os.usuarioFinalizador)
  ordensServicoFinalizadas: OrdensServicoEntity;

  @OneToMany(() => OrdensServicoEntity, (os) => os.usuarioCriador)
  ordensServicoCriadas: OrdensServicoEntity;
}
