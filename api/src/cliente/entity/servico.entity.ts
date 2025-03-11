import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
} from 'typeorm';
import { BaseEntity } from '../../base/base.entity';
import { TipoServicoEnum } from '../enum/tipoServico.enum';
import { ModeloVistoriaEntity } from '../../template-modelo-vistoria/entity/modeloVistoria.entity';
import { ClienteEntity } from './cliente.entity';
import { ConsultasVeicularesEnum } from '../../servicos-externos/enum/ConsultasVeicularesEnum';

@Entity('servicos')
export class ServicoEntity extends BaseEntity {
  @Column({ length: 150 })
  nome: string;

  @Column({
    name: 'tipo_servico',
    type: 'enum',
    enum: TipoServicoEnum,
    default: TipoServicoEnum.VISTORIA,
  })
  tipo: TipoServicoEnum;

  @Column('decimal', {
    precision: 10,
    scale: 2,
    comment: 'Valor em reais, quanto cobramos do nosso cliente',
  })
  custo: number;

  @Column('decimal', {
    precision: 10,
    scale: 2,
    comment: 'Valor em reais quanto nosso cliente cobra para o cliente final',
  })
  preco: number;

  @Column({
    type: 'enum',
    enum: ConsultasVeicularesEnum,
    default: ConsultasVeicularesEnum.SEM_CONSULTA,
  })
  integracao: ConsultasVeicularesEnum;

  @ManyToOne(
    () => ClienteEntity,
    (clienteVistoriador) => clienteVistoriador.servicos,
  )
  @JoinColumn({ name: 'cliente_id' })
  cliente: ClienteEntity;
  @Column({ name: 'cliente_id' })
  clienteId: string;

  @ManyToMany(() => ModeloVistoriaEntity, (modelo) => modelo.servicos)
  @JoinTable({
    name: 'servicos_modelos_vistoria',
    joinColumn: { name: 'servico_id', referencedColumnName: 'id' },
    inverseJoinColumn: {
      name: 'modelo_vistoria_id',
      referencedColumnName: 'id',
    },
  })
  modelos: ModeloVistoriaEntity[];
}
