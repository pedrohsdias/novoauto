import { Entity, Column, OneToMany, ManyToMany } from 'typeorm';
import { BaseEntity } from '../../base/base.entity';
import { CamposEntity } from './campos.entity';
import { ModelosVistoriaEntity } from './modelosVistoria.entity';
import { TipoBLocoEnum } from '../enum/tipoBLoco.enum';

@Entity('blocos')
export class BlocosEntity extends BaseEntity {
  @Column()
  nome: string;

  @Column()
  fontAwesomeIcon: string;

  @Column({
    name: 'imagem_caminho',
    comment: 'Somente preenchido quando tipo bloco = imagem',
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
