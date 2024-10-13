import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { BaseEntity } from '../../base/base.entity';
import { PessoasEntity } from '../../comum/entity/pessoas.entity';
import { ServicosEntity } from './servicos.entity';
import { FranquiadoresEntity } from './franquiadores.entity';
import { OrdensServicoEntity } from '../../vistoria/entity/ordensServico.entity';
import { ClientesEntity } from '../../vistoria/entity/clientes.entity';

@Entity('unidades')
export class UnidadesEntity extends BaseEntity {
  @Column({
    comment: 'nome para exibição em tela, é o msm valor do homônimo em pessoa',
  })
  apelido: string;

  @ManyToOne(() => FranquiadoresEntity, (franquiador) => franquiador.unidades)
  @JoinColumn({ name: 'franquiador_id' })
  franquiador: FranquiadoresEntity;

  @OneToMany(() => ServicosEntity, (servico) => servico.unidade)
  servicos: ServicosEntity[];

  @OneToMany(() => OrdensServicoEntity, (os) => os.unidade)
  ordensServico: OrdensServicoEntity[];

  @OneToMany(() => ClientesEntity, (cliente) => cliente.unidade)
  clientes: ClientesEntity[];

  @ManyToOne(() => PessoasEntity, (pessoa) => pessoa.unidades)
  @JoinColumn({ name: 'pessoa_id' })
  pessoa: PessoasEntity;
}
