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
import { ModelosVistoriaEntity } from '../../template-modelo-vistoria/entity/modelosVistoria.entity';
import { UnidadesEntity } from './unidades.entity';

@Entity('servicos')
export class ServicosEntity extends BaseEntity {
  @Column()
  nome: string;

  @Column({
    name: 'tipo_servico',
    type: 'enum',
    enum: TipoServicoEnum,
    default: TipoServicoEnum.VISTORIA,
  })
  tipo: TipoServicoEnum;

  @Column()
  custo: number;

  @Column()
  preco: number;

  @Column()
  consulta: number;

  @ManyToOne(() => UnidadesEntity, (unidade) => unidade.servicos)
  @JoinColumn({ name: 'unidade_id' })
  unidade: UnidadesEntity;

  @ManyToMany(() => ModelosVistoriaEntity, (modelo) => modelo.servicos)
  @JoinTable({
    name: 'servicos_modelos_vistoria',
    joinColumn: { name: 'modelo_vistoria_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'servico_id', referencedColumnName: 'id' },
  })
  modelos: ModelosVistoriaEntity[];
}
