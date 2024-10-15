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
import bcrypt from 'bcrypt';
import { Exclude } from 'class-transformer';
import { ConfigService } from '@nestjs/config';
import { PerfilUsuarioEnum } from '../enum/perfilUsuario.enum';
import { FranquiadoresEntity } from '../../franquia/entity/franquiadores.entity';
import { UnidadesEntity } from '../../franquia/entity/unidades.entity';
import { OrdensServicoEntity } from '../../vistoria/entity/ordensServico.entity';

@Entity('usuarios')
export class UsuariosEntity extends BaseEntity {
  @Column({ length: 150 })
  nome: string;

  @Column({ length: 150, unique: true })
  email: string;

  @Column({
    name: 'perfil',
    type: 'enum',
    enum: PerfilUsuarioEnum,
    default: PerfilUsuarioEnum.USUARIO,
  })
  perfil: PerfilUsuarioEnum;

  @ManyToOne(() => FranquiadoresEntity, (franquiador) => franquiador.usuarios)
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
  @Column()
  senha: string;

  @BeforeInsert()
  async hashSenha(configService: ConfigService) {
    this.senha = await bcrypt.hash(
      this.senha,
      configService.get<string>('APP_KEY'),
    );
  }

  @OneToMany(() => OrdensServicoEntity, (os) => os.ordensServicoCriadas)
  ordensServicoFinalizadas: OrdensServicoEntity;

  @OneToMany(() => OrdensServicoEntity, (os) => os.ordensServicoFinalizadas)
  ordensServicoCriadas: OrdensServicoEntity;
}
