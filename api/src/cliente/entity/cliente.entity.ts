import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany } from 'typeorm';

import { BaseEntity } from '../../base/base.entity';
import { PessoasEntity } from '../../comum/entity/pessoas.entity';
import { UsuariosEntity } from '../../auth/entity/usuario.entity';
import { TipoClienteEnum } from '../enum/tipoCliente.enum';
import { ServicosEntity } from './servicos.entity';
import { OrdensServicoEntity } from '../../vistoria/entity/ordensServico.entity';
import { ClienteFinalEntity } from '../../vistoria/entity/clienteFinal.entity';

@Entity('clientes')
export class ClienteEntity extends BaseEntity {
  @Column({
    length: 150,
    comment: 'nome para exibição em tela, é o msm valor do homônimo em pessoa',
  })
  apelido: string;
  @Column({
    name: 'tipo_cliente',
    type: 'enum',
    enum: TipoClienteEnum,
    default: TipoClienteEnum.EMPRESA_ECV,
    nullable: false,
  })
  tipo: TipoClienteEnum;

  @Column({ name: 'link_logo', length: 200, nullable: true })
  linkLogo: string;

  @Column({ name: 'termo_data_aceite', nullable: true })
  termoDtAceite: Date;

  @Column({ name: 'termo_usuario_id', nullable: true })
  termoUsuarioAceite: string;

  @ManyToOne(() => PessoasEntity, (pessoa) => pessoa.cliente, {
    nullable: false,
  })
  @JoinColumn({ name: 'pessoa_id' })
  pessoa: PessoasEntity;
  @OneToMany(() => ServicosEntity, (servico) => servico.cliente)
  servicos: ServicosEntity[];

  @OneToMany(() => OrdensServicoEntity, (os) => os.cliente)
  ordensServico: OrdensServicoEntity[];

  @ManyToMany(() => UsuariosEntity, (usuario) => usuario.clientes)
  usuarios: UsuariosEntity[];

  @ManyToMany(() => ClienteFinalEntity, (cliente) => cliente.clientes)
  clientesFinais: ClienteFinalEntity[];
  /**
   * auto relaciomento
   */
  @ManyToOne(() => ClienteEntity, (clientePai) => clientePai.filiais, {
    nullable: true,
  })
  @JoinColumn({ name: 'matriz_id' })
  matriz: ClienteEntity;

  @OneToMany(() => ClienteEntity, (clienteFilho) => clienteFilho.matriz)
  filiais: ClienteEntity[];
}
