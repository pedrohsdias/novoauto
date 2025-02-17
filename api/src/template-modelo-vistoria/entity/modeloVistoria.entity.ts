import { Entity, Column, ManyToMany, JoinTable, OneToMany } from 'typeorm';
import { BaseEntity } from '../../base/base.entity';
import { BlocoEntity } from './bloco.entity';
import { OrdemServicoEntity } from '../../vistoria/entity/ordemServico.entity';
import { ServicoEntity } from '../../cliente/entity/servico.entity';

@Entity('modelos_vistoria')
export class ModeloVistoriaEntity extends BaseEntity {
  @Column({ length: 100 })
  nome: string;

  @ManyToMany(() => BlocoEntity, (bloco) => bloco.modelosVistoria)
  @JoinTable({
    name: 'modelos_vistoria_blocos',
    joinColumn: { name: 'modelo_vistoria_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'bloco_id', referencedColumnName: 'id' },
  })
  blocos: BlocoEntity[];

  @ManyToMany(() => ServicoEntity, (servico) => servico.modelos)
  servicos: ServicoEntity[];

  @OneToMany(() => OrdemServicoEntity, (os) => os.modeloVistoria)
  ordensServico: OrdemServicoEntity[];
}
