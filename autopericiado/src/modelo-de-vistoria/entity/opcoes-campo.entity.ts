import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Campos } from './campos.entity';
import { BaseEntity } from '../../base.entity';

@Entity('opcoes_campo')
export class OpcoesCampo extends BaseEntity {
  @Column()
  nome: string;

  @Column()
  alias: string;

  @Column({ name: 'eh_padrao', default: false })
  ehPadrao: boolean;

  @Column({
    name: 'nivel_risco',
    type: 'enum',
    enum: ['padrao', 'sucesso', 'aviso', 'erro'],
    default: 'padrao',
  })
  nivelRisco: string;

  @ManyToOne(() => Campos, (campo) => campo.opcoesCampo)
  @JoinColumn({ name: 'campo_id' })
  campo: Campos;
}
