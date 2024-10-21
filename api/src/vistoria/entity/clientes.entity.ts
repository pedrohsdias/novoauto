import { Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { BaseEntity } from '../../base/base.entity';
import { UnidadesEntity } from '../../franquia/entity/unidades.entity';
import { PessoasEntity } from '../../comum/entity/pessoas.entity';
import { OrdensServicoEntity } from './ordensServico.entity';

@Entity('clientes')
export class ClientesEntity extends BaseEntity {
  @ManyToOne(() => UnidadesEntity, (unidade) => unidade.clientes)
  @JoinColumn({ name: 'unidade_id' })
  unidade: UnidadesEntity;

  @ManyToOne(() => PessoasEntity, (pessoa) => pessoa.clientes, {
    nullable: false,
  })
  @JoinColumn({ name: 'pessoa_id' })
  pessoa: PessoasEntity;

  @OneToMany(() => OrdensServicoEntity, (os) => os.cliente)
  ordensServico: OrdensServicoEntity[];
}
