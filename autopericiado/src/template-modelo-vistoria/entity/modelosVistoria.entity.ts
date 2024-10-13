import { Entity, Column, ManyToMany, JoinTable, OneToMany } from 'typeorm';
import { BaseEntity } from '../../base/base.entity';
import { BlocosEntity } from './blocos.entity';
import { ServicosEntity } from '../../franquia/entity/servicos.entity';
import { OrdensServicoEntity } from '../../vistoria/entity/ordensServico.entity';

@Entity('modelos_vistoria')
export class ModelosVistoriaEntity extends BaseEntity {
  @Column()
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
