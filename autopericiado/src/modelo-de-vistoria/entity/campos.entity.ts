import { Entity, Column, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { TiposCampo } from './tipos-campo.entity';
import { ModeloVistoria } from './modelo-vistoria.entity';
import { OpcoesCampo } from './opcoes-campo.entity';
import { BaseEntity } from '../../base.entity';

@Entity('campos')
export class Campos extends BaseEntity {
  @Column()
  nome: string;

  @Column()
  alias: string;

  @ManyToOne(() => TiposCampo, (tiposCampo) => tiposCampo.campos)
  @JoinColumn({ name: 'tipos_campos_id' })
  tiposCampo: TiposCampo;

  @ManyToOne(() => ModeloVistoria, (modeloVistoria) => modeloVistoria.campos)
  @JoinColumn({ name: 'modelo_vistoria_id' })
  modeloVistoria: ModeloVistoria;

  @Column({ name: 'qtd_selecionado' })
  qtdSelecionado: number;

  @OneToMany(() => OpcoesCampo, (opcaoCampo) => opcaoCampo.campo)
  opcoesCampo: OpcoesCampo[];
}
