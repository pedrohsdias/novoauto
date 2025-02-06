import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany } from 'typeorm';
import { BaseEntity } from '../../base/base.entity';
import { PessoasEntity } from '../../comum/entity/pessoas.entity';
import { OrdensServicoEntity } from './ordensServico.entity';
import { ClienteEntity } from '../../cliente/entity/cliente.entity';

@Entity('clientes_finais')
export class ClienteFinalEntity extends BaseEntity {

  @ManyToOne(() => PessoasEntity, (pessoa) => pessoa.clienteFinal, {
    nullable: false,
  })
  @JoinColumn({ name: 'pessoa_id' })
  pessoa: PessoasEntity;

  @OneToMany(() => OrdensServicoEntity, (os) => os.clienteFinal)
  ordensServico: OrdensServicoEntity[];

  @ManyToMany(() => ClienteEntity, (cliente) => cliente.clientesFinais)
  @JoinTable({
    name: 'clientes_clientes_finais', // Nome da tabela intermediária
    joinColumn: { name: 'cliente_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'cliente_final_id', referencedColumnName: 'id' },
  })
  clientes: ClienteEntity[];
}
