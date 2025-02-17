import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { CampoEntity } from './campo.entity';
import { BaseEntity } from '../../base/base.entity';
import { NivelRiscoEnum } from '../enum/nivelRisco.enum';

@Entity('opcoes_campo')
export class OpcaoCampoEntity extends BaseEntity {
  @Column({
    length: 100,
    comment: 'Campo tipo slug para usara em referencias fixas'
  })
  nome: string;

  @Column({comment: 'Campo exibido nas labels'})
  alias: string;

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

  @ManyToOne(() => CampoEntity, (campo) => campo.opcoesCampo)
  @JoinColumn({ name: 'campo_id' })
  campo: CampoEntity;
}
