import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from '../../base/base.entity';
import { EnderecoEntity } from './endereco.entity';

@Entity('tipos_endereco')
export class TipoEnderecoEntity extends BaseEntity {
  @Column({ length: 30 })
  descricao: string;
  @OneToMany(() => EnderecoEntity, (endereco) => endereco.tipo)
  enderecos: EnderecoEntity[];
}
