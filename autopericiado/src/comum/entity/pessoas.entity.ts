import { Column, Entity, OneToMany } from 'typeorm';
import { TipoPessoaEnum } from '../../franquia/enum/tipoPessoa.enum';
import { BaseEntity } from '../../base/base.entity';
import { FranquiadoresEntity } from '../../franquia/entity/franquiadores.entity';
import { UnidadesEntity } from '../../franquia/entity/unidades.entity';
import { EnderecosEntity } from './enderecos.entity';
import { TelefonesEntity } from './telefones.entity';
import { ClientesEntity } from '../../vistoria/entity/clientes.entity';

@Entity('pessoa')
export class PessoasEntity extends BaseEntity {
  @Column()
  apelido: string;

  @Column({ name: 'nome_formal' })
  nomeFormal: string;

  @Column()
  documento: string;

  @Column({
    name: 'tipo_documento',
    type: 'enum',
    enum: TipoPessoaEnum,
    default: TipoPessoaEnum.PJ,
  })
  tipo: TipoPessoaEnum;

  @OneToMany(() => FranquiadoresEntity, (franquiador) => franquiador.pessoa)
  franquiadores: FranquiadoresEntity[];

  @OneToMany(() => UnidadesEntity, (unidade) => unidade.pessoa)
  unidades: UnidadesEntity[];

  @OneToMany(() => EnderecosEntity, (endereco) => endereco.pessoa)
  enderecos: EnderecosEntity[];

  @OneToMany(() => TelefonesEntity, (telefone) => telefone.pessoa)
  telefones: TelefonesEntity[];

  @OneToMany(() => ClientesEntity, (cliente) => cliente.pessoa)
  clientes: ClientesEntity[];
}
