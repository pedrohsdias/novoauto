import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';

import { BaseEntity } from '../../base/base.entity';
import { ModeloVistoriaEntity } from '../../template-modelo-vistoria/entity/modeloVistoria.entity';
import { StatusOrdemServicoEnum } from '../enum/statusOrdemServico.enum';
import { ParecerVistoriaEnum } from '../enum/parecerVistoria.enum';
import { ClienteFinalEntity } from './clienteFinal.entity';
import { UsuariosEntity } from '../../auth/entity/usuario.entity';
import { TipoDadoConsultadoEnum } from '../../cliente/enum/tipoDadoConsultado.enum';
import { ClienteEntity } from '../../cliente/entity/cliente.entity';
import { DadosServicosExternosEntity } from '../../servicos-externos/entity/dadosServicosExternos.entity';

@Entity('ordem_servico')
export class OrdemServicoEntity extends BaseEntity {
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

  @ManyToOne(() => ClienteFinalEntity, (cliente) => cliente.ordensServico)
  @JoinColumn({ name: 'cliente_final_id' })
  clienteFinal: ClienteFinalEntity;
  @Column({ name: 'cliente_final_id' })
  clienteFinalId: ClienteFinalEntity;

  @ManyToOne(() => ClienteEntity, (cliente) => cliente.ordensServico)
  @JoinColumn({ name: 'cliente_id' })
  cliente: ClienteEntity;
  @Column({ name: 'cliente_id' })
  clienteId: ClienteEntity;

  @ManyToOne(() => ModeloVistoriaEntity, (modelo) => modelo.ordensServico)
  @JoinColumn({ name: 'modelo_vistoria_id' })
  modeloVistoria: ModeloVistoriaEntity;

  @ManyToOne(() => UsuariosEntity, (usuario) => usuario.ordensServicoCriadas)
  @JoinColumn({ name: 'usuario_criador_id' })
  usuarioCriador: UsuariosEntity;

  @ManyToOne(
    () => UsuariosEntity,
    (usuario) => usuario.ordensServicoFinalizadas,
  )
  @JoinColumn({ name: 'usuario_finalizador_id' })
  usuarioFinalizador: UsuariosEntity;

  @OneToOne(() => DadosServicosExternosEntity, {
    cascade: true,
    nullable: true,
  })
  @JoinColumn({ name: 'consulta_veicular_id' })
  consultaVeicular: DadosServicosExternosEntity;
}
