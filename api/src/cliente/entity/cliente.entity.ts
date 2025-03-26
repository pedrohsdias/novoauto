import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
} from 'typeorm';

import { BaseEntity } from '../../base/base.entity';
import { PessoaEntity } from '../../comum/entity/pessoa.entity';
import { UsuariosEntity } from '../../auth/entity/usuario.entity';
import { TipoClienteEnum } from '../enum/tipoCliente.enum';
import { ServicoEntity } from './servico.entity';
import { OrdemServicoEntity } from '../../vistoria/entity/ordemServico.entity';
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
    default: TipoClienteEnum.EMPRESA_UNICA,
    nullable: false,
  })
  tipo: TipoClienteEnum;

  @Column({ name: 'link_logo', length: 200, nullable: true })
  linkLogo: string;

  @Column({ name: 'termo_data_aceite', nullable: true })
  termoDtAceite: Date;

  @Column({ name: 'termo_usuario_id', nullable: true })
  termoUsuarioAceite: string;

  @Column({ name: 'pessoa_id' })
  pessoaId: string;
  @ManyToOne(() => PessoaEntity, (pessoa) => pessoa.cliente, {
    nullable: false,
  })
  @JoinColumn({ name: 'pessoa_id' })
  pessoa: PessoaEntity;

  @OneToMany(() => ServicoEntity, (servico) => servico.cliente)
  servicos: ServicoEntity[];

  @OneToMany(() => OrdemServicoEntity, (os) => os.cliente)
  ordensServico: OrdemServicoEntity[];

  @ManyToMany(() => UsuariosEntity, (usuario) => usuario.clientes)
  usuarios: UsuariosEntity[];

  @ManyToMany(() => ClienteFinalEntity, (cliente) => cliente.clientes)
  clientesFinais: ClienteFinalEntity[];

  /**
   * auto relaciomento
   */
  @Column({ name: 'matriz_id', nullable: true })
  matrizId: string;
  @ManyToOne(() => ClienteEntity, (clientePai) => clientePai.filiais)
  @JoinColumn({ name: 'matriz_id' })
  matriz: ClienteEntity;

  @OneToMany(() => ClienteEntity, (clienteFilho) => clienteFilho.matriz)
  filiais: ClienteEntity[];
}
