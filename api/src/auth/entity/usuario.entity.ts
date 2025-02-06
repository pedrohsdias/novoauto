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
import { OrdensServicoEntity } from '../../vistoria/entity/ordensServico.entity';
import { ClienteEntity } from '../../cliente/entity/cliente.entity';

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

  @ManyToOne(() => ClienteEntity, (cliente) => cliente.usuarios, {
    nullable: true,
  })
  @JoinColumn({ name: 'cliente_id' })
  clientePrincipal: ClienteEntity;

  @ManyToMany(() => ClienteEntity, (cliente) => cliente.usuarios)
  @JoinTable({
    name: 'usuarios_clientes',
    joinColumn: { name: 'usuario_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'cliente_id', referencedColumnName: 'id' },
  })
  clientes: ClienteEntity[];

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
