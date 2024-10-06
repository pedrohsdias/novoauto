import { Entity, Column, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { TiposCampo } from './tipos-campo.entity';
import { OpcoesCampo } from './opcoes-campo.entity';
import { BaseEntity } from '../../base.entity';
import { Blocos } from './blocos.entity';

@Entity('campos')
export class Campos extends BaseEntity {
  @Column()
  nome: string;

  @Column()
  alias: string;

  @ManyToOne(() => TiposCampo, (tiposCampo) => tiposCampo.campos)
  @JoinColumn({ name: 'tipo_campo_id' })
  tiposCampo: TiposCampo;

  @ManyToOne(() => Blocos, (bloco) => bloco.campos)
  @JoinColumn({ name: 'bloco_id' })
  bloco: Blocos;

  @Column({ name: 'qtd_selecionado' })
  qtdSelecionado: number;

  @OneToMany(() => OpcoesCampo, (opcaoCampo) => opcaoCampo.campo)
  opcoesCampo: OpcoesCampo[];
}
