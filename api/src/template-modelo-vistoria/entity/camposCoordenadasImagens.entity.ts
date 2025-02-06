import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { BaseEntity } from '../../base/base.entity';
import { CamposEntity } from './campos.entity';
import { BlocoImagemEntity } from './blocoImagens.entity';

@Entity('campos_coordenadas_imagens')
export class CampoCoordenadaImagemEntity extends BaseEntity {

  @ManyToOne(() => CamposEntity, (campo) => campo.coordenadas)
  @JoinColumn({name: 'campo_id'})
  campo: CamposEntity;

  @ManyToOne(() => BlocoImagemEntity, (imagem) => imagem.coordenadas)
  @JoinColumn({name: 'imagem_id'})
  imagem: BlocoImagemEntity;

  @Column({
    name: 'coordenada_x_y',
    length: 20,
    comment: 'Indicado onde marcar na imagem',
    nullable: true,
  })
  coordenada: string;
}
