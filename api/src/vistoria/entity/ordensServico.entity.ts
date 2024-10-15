import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

import { BaseEntity } from '../../base/base.entity';
import { UnidadesEntity } from '../../franquia/entity/unidades.entity';
import { ModelosVistoriaEntity } from '../../template-modelo-vistoria/entity/modelosVistoria.entity';
import { TipoDadoConsultadoEnum } from '../../franquia/enum/tipoDadoConsultado.enum';
import { StatusOrdemServicoEnum } from '../enum/statusOrdemServico.enum';
import { ParecerVistoriaEnum } from '../enum/parecerVistoria.enum';
import { TipoOrdemServicoEnum } from '../enum/tipoOrdemServico.enum';
import { ClientesEntity } from './clientes.entity';
import { UsuariosEntity } from '../../auth/entity/usuario.entity';

@Entity('ordem_servico')
export class OrdensServicoEntity extends BaseEntity {

  @Column({ length: 50 })
  sequenciador: string;

  @Column('jsonb', { name: 'modelo_vistoria_snapshot' })
  modeloVistoriaSnapshot: object;

  @Column({
    name: 'tipo_dado_consultado',
    type: 'enum',
    enum: TipoDadoConsultadoEnum,
    default: TipoDadoConsultadoEnum.PLACA,
  })
  tipoDadoConsultado: TipoDadoConsultadoEnum;

  @Column({ name: `dado_consultado`, length: 10, nullable: true })
  dadoConsultado: string;

  @Column({ length: 200, nullable: true })
  comentario: string;

  @Column('decimal', { precision: 10, scale: 2, comment: 'Valor em reais' })
  custo: number;

  @Column('decimal', { precision: 10, scale: 2, comment: 'Valor em reais' })
  preco: number;
  
  @Column({ name: 'custo_zerado', default: false })
  custoZerado: boolean;

  @Column({
    name: 'status',
    type: 'enum',
    enum: StatusOrdemServicoEnum,
    default: StatusOrdemServicoEnum.AGENDADO,
  })
  status: StatusOrdemServicoEnum;

  @Column({
    name: 'parecer_vistoria',
    type: 'enum',
    enum: ParecerVistoriaEnum,
    default: ParecerVistoriaEnum.SEM_STATUS,
  })
  parecerVistoria: ParecerVistoriaEnum;

  @Column({
    name: 'tipo_os',
    type: 'enum',
    enum: TipoOrdemServicoEnum,
    default: TipoOrdemServicoEnum.VISTORIA,
  })
  tipoOS: TipoOrdemServicoEnum;
  
  
  @ManyToOne(() => ClientesEntity, (cliente) => cliente.ordensServico)
  @JoinColumn({ name: 'cliente_id' })
  cliente: ClientesEntity;
  
  @ManyToOne(() => UnidadesEntity, (unidade) => unidade.ordensServico)
  @JoinColumn({ name: 'unidade_id' })
  unidade: UnidadesEntity;
  
  @ManyToOne(() => ModelosVistoriaEntity, (modelo) => modelo.ordensServico)
  @JoinColumn({ name: 'modelo_vistoria_id' })
  modeloVistoria: ModelosVistoriaEntity;
  
  ManyToOne(() => UsuariosEntity, (usuario) => usuario.ordensServicoCriadas)
  @JoinColumn({ name: 'usuario_criador_id' })
  usuarioCriador: UsuariosEntity;
  
  
  ManyToOne(() => UsuariosEntity, (usuario) => usuario.ordensServicoFinalizadas)
  @JoinColumn({ name: 'usuario_finalizador_id' })
  usuarioFinalizador: UsuariosEntity;
}
