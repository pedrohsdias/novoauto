import { Entity, Column, OneToMany, ManyToMany } from 'typeorm';
import { BaseEntity } from '../../base/base.entity';
import { CamposEntity } from './campos.entity';
import { ModelosVistoriaEntity } from './modelosVistoria.entity';
import { TipoBLocoEnum } from '../enum/tipoBLoco.enum';

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
    enum: TipoBLocoEnum,
    default: TipoBLocoEnum.PADRAO,
  })
  tipo: TipoBLocoEnum;

  @ManyToMany(
    () => ModelosVistoriaEntity,
    (modeloVistoria) => modeloVistoria.blocos,
  )
  modelosVistoria: ModelosVistoriaEntity[];

  @OneToMany(() => CamposEntity, (campo) => campo.bloco)
  campos: CamposEntity[];
}
