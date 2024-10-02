import { Entity, Column, ManyToOne } from 'typeorm';
import { Campos } from './campos.entity';
import { BaseEntity } from '../../base.entity';


@Entity('opcoes_campo')
export class OpcoesCampo extends BaseEntity {
  @Column()
  nome: string;

  @Column()
  alias: string;

  @Column({ default: false })
  eh_padrao: boolean;

  @Column({
    type: 'enum',
    enum: ['padrao', 'sucesso', 'aviso', 'erro'],
    default: 'padrao',
  })
  risco: string;

  @ManyToOne(() => Campos, (campo) => campo.opcoesCampo)
  campo: Campos;
}
