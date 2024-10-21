import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from '../../base/base.entity';
import { MunicipiosEntity } from './municipios.entity';
import { TiposEnderecoEntity } from './tiposEndereco.entity';
import { PessoasEntity } from './pessoas.entity';

@Entity('enderecos')
export class EnderecosEntity extends BaseEntity {
  @Column({ length: 200 })
  logradouro: string;
  @Column({ length: 15, default: 'S/N' })
  numero: string;
  @Column({ length: 150 })
  complemento: string;
  @Column({ length: 8 })
  cep: string;
  @Column({ length: 70 })
  bairro: string;

  @ManyToOne(() => PessoasEntity, (pessoa) => pessoa.enderecos, {
    nullable: false,
  })
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
