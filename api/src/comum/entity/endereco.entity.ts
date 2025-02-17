import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from '../../base/base.entity';
import { MunicipioEntity } from './municipio.entity';
import { TipoEnderecoEntity } from './tipoEndereco.entity';
import { PessoaEntity } from './pessoa.entity';
import { ContatoEntity } from './contato.entity';

@Entity('enderecos')
export class EnderecoEntity extends BaseEntity {
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

  @ManyToOne(() => ContatoEntity, (contato) => contato.enderecos, {
    nullable: false,
  })
  @JoinColumn({ name: 'contato_id' })
  contato: ContatoEntity;

  @ManyToOne(() => MunicipioEntity, (municipio) => municipio.enderecos)
  @JoinColumn({ name: 'municipio_id' })
  municipio: MunicipioEntity;

  @ManyToOne(
    () => TipoEnderecoEntity,
    (tipoEndereco) => tipoEndereco.enderecos,
  )
  @JoinColumn({ name: 'tipo_endereco_id' })
  tipo: TipoEnderecoEntity;
}
