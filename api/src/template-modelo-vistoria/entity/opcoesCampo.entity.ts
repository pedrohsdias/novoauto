import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { CamposEntity } from './campos.entity';
import { BaseEntity } from '../../base/base.entity';
import { NivelRiscoEnum } from '../enum/nivelRisco.enum';

@Entity('opcoes_campo')
export class OpcoesCampoEntity extends BaseEntity {
  @Column({ length: 100 })
  nome: string;

  @Column({ comment: 'Campo tipo slug para usara em referencias especificas' })
  alias: string;

  @Column({
    name: 'coordenada_x_y',
    length: 20,
    comment:
      'Campo preenchido quando bloco tipo imagem, indicando onde marcar na imagem',
    nullable: true,
  })
  coordenada: string;

  @Column({ name: 'eh_padrao', default: false })
  ehPadrao: boolean;

  @Column({
    name: 'nivel_risco',
    type: 'enum',
    enum: NivelRiscoEnum,
    default: NivelRiscoEnum.PADRAO,
    comment: 'Campo indica um coloração diferente para a opção',
  })
  nivelRisco: NivelRiscoEnum;

  @ManyToOne(() => CamposEntity, (campo) => campo.opcoesCampo)
  @JoinColumn({ name: 'campo_id' })
  campo: CamposEntity;
}
