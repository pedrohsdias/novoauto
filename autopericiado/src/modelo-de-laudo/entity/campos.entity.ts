import { Entity, Column, ManyToOne, OneToMany } from 'typeorm';
import { TiposCampo } from './tipos-campo.entity';
import { ModeloLaudo } from './modelo-laudo.entity';
import { OpcoesCampo } from './opcoes-campo.entity';
import { BaseEntity } from '../../base.entity';

@Entity('campos')
export class Campos extends BaseEntity {
  @Column()
  nome: string;

  @Column()
  alias: string;

  @ManyToOne(() => TiposCampo, (tiposCampo) => tiposCampo.campos)
  tiposCampo: TiposCampo;

  @ManyToOne(() => ModeloLaudo, (modeloLaudo) => modeloLaudo.campos)
  modeloLaudo: ModeloLaudo;

  @Column()
  qtd_selecionado: number;

  @OneToMany(() => OpcoesCampo, (opcaoCampo) => opcaoCampo.campo)
  opcoesCampo: OpcoesCampo[];
}
