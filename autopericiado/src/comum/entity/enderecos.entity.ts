import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from '../../base/base.entity';
import { MunicipiosEntity } from './municipios.entity';
import { TiposEnderecoEntity } from './tiposEndereco.entity';
import { PessoasEntity } from './pessoas.entity';

@Entity('enderecos')
export class EnderecosEntity extends BaseEntity {
  @Column()
  logradouro: string;
  @Column()
  numero: string;
  @Column()
  complemento: string;
  @Column()
  cep: string;
  @Column()
  bairro: string;

  @ManyToOne(() => PessoasEntity, (pessoa) => pessoa.enderecos)
  @JoinColumn({ name: 'pessoa_id' })
  pessoa: PessoasEntity;

  @ManyToOne(() => MunicipiosEntity, (municipio) => municipio.enderecos)
  @JoinColumn({ name: 'municipio_id' })
  municipio: MunicipiosEntity;

  @ManyToOne(
    () => TiposEnderecoEntity,
    (tipoEndereco) => tipoEndereco.enderecos,
  )
  @JoinColumn({ name: 'tipo_endereco_id' })
  tipo: TiposEnderecoEntity;
}
