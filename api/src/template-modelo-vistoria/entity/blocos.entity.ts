import { Entity, Column, OneToMany, ManyToMany } from 'typeorm';
import { BaseEntity } from '../../base/base.entity';
import { CamposEntity } from './campos.entity';
import { ModelosVistoriaEntity } from './modelosVistoria.entity';
import { TipoBlocoEnum } from '../enum/tipoBloco.enum';
import { BlocoImagemEntity } from './blocoImagens.entity';

@Entity('blocos')
export class BlocosEntity extends BaseEntity {
  @Column({ length: 75 })
  nome: string;

  @Column({ nullable: true, length: 30 })
  fontAwesomeIcon: string;

  @Column({
    name: 'imagem_caminho',
    comment: 'Somente preenchido quando tipo bloco = imagem',
    nullable: true,
  })
  imagemCaminho: string;

  @Column({
    name: 'tipo_bloco',
    type: 'enum',
    enum: TipoBlocoEnum,
    default: TipoBlocoEnum.PADRAO,
  })
  tipo: TipoBlocoEnum;

  @ManyToMany(
    () => ModelosVistoriaEntity,
    (modeloVistoria) => modeloVistoria.blocos,
  )
  modelosVistoria: ModelosVistoriaEntity[];

  @OneToMany(() => CamposEntity, (campo) => campo.bloco)
  campos: CamposEntity[];

  @OneToMany(() => BlocoImagemEntity, (imagem) => imagem.bloco)
  imagens: BlocoImagemEntity[];
}
