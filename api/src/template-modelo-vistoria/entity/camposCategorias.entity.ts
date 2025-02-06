import { Entity, Column, OneToMany } from 'typeorm';
import { BaseEntity } from '../../base/base.entity';
import { CamposEntity } from './campos.entity';

@Entity('campos_categorias')
export class CamposCategoriasEntity extends BaseEntity {
  @Column({
    length: 100,
    comment: 'nome da categoria',
  })
  nome: string;

  @OneToMany(() => CamposEntity, (campo) => campo.categoria)
  campos: CamposEntity[];
}
