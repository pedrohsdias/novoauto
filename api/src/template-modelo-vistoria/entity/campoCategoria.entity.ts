import { Entity, Column, OneToMany } from 'typeorm';
import { BaseEntity } from '../../base/base.entity';
import { CampoEntity } from './campo.entity';

@Entity('campos_categorias')
export class CampoCategoriaEntity extends BaseEntity {
  @Column({
    length: 100,
    comment: 'nome da categoria',
  })
  nome: string;

  @OneToMany(() => CampoEntity, (campo) => campo.categoria)
  campos: CampoEntity[];
}
