import { Entity, Column, ManyToMany, JoinTable, OneToMany } from 'typeorm';
import { BaseEntity } from '../../base/base.entity';
import { BlocosEntity } from './blocos.entity';
import { OrdensServicoEntity } from '../../vistoria/entity/ordensServico.entity';
import { ServicosEntity } from '../../cliente/entity/servicos.entity';

@Entity('modelos_vistoria')
export class ModelosVistoriaEntity extends BaseEntity {
  @Column({ length: 100 })
  nome: string;

  @ManyToMany(() => BlocosEntity, (bloco) => bloco.modelosVistoria)
  @JoinTable({
    name: 'modelos_vistoria_blocos',
    joinColumn: { name: 'modelo_vistoria_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'bloco_id', referencedColumnName: 'id' },
  })
  blocos: BlocosEntity[];

  @ManyToMany(() => ServicosEntity, (servico) => servico.modelos)
  servicos: ServicosEntity[];

  @OneToMany(() => OrdensServicoEntity, (os) => os.modeloVistoria)
  ordensServico: OrdensServicoEntity[];
}
