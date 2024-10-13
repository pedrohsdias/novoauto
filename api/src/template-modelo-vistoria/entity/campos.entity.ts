import { Entity, Column, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { OpcoesCampoEntity } from './opcoesCampo.entity';
import { BaseEntity } from '../../base/base.entity';
import { BlocosEntity } from './blocos.entity';
import { TipoCampoEnum } from '../enum/tipoCampo.enum';

@Entity('campos')
export class CamposEntity extends BaseEntity {
  @Column({ length: 100 })
  nome: string;

  @Column({
    comment: 'Campo tipo slug para usara em referencias especificas',
    length: 100,
  })
  alias: string;

  @Column({
    name: 'tipo_campo',
    type: 'enum',
    enum: TipoCampoEnum,
    default: TipoCampoEnum.INPUT,
  })
  tipo: TipoCampoEnum;

  @ManyToOne(() => BlocosEntity, (bloco) => bloco.campos)
  @JoinColumn({ name: 'bloco_id' })
  bloco: BlocosEntity;

  @Column({
    name: 'qtd_selecionado',
    default: 0,
    comment: '0 = campo opcional, 1 = campo obrigatorio, 2=campo multivalorado',
  })
  qtdSelecionado: number;

  @Column({
    name: 'tem_observacao',
    default: false,
    comment:
      'Caso alem do valor o campo permita observação, tipo item de avaliacao',
  })
  temObservacao: boolean;

  @OneToMany(() => OpcoesCampoEntity, (opcaoCampo) => opcaoCampo.campo)
  opcoesCampo: OpcoesCampoEntity[];
}
