import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from '../../base/base.entity';
import { EnderecosEntity } from './enderecos.entity';

@Entity('tipos_endereco')
export class TiposEnderecoEntity extends BaseEntity {
  @Column({ length: 30 })
  descricao: string;
  @OneToMany(() => EnderecosEntity, (endereco) => endereco.tipo)
  enderecos: EnderecosEntity[];
}
