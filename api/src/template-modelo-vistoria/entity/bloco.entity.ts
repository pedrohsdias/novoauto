import { Entity, Column, OneToMany, ManyToMany } from 'typeorm';
import { BaseEntity } from '../../base/base.entity';
import { CampoEntity } from './campo.entity';
import { ModeloVistoriaEntity } from './modeloVistoria.entity';
import { TipoBlocoEnum } from '../enum/tipoBloco.enum';
import { BlocoImagemEntity } from './blocoImagem.entity';

@Entity('blocos')
export class BlocoEntity extends BaseEntity {
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
    () => ModeloVistoriaEntity,
    (modeloVistoria) => modeloVistoria.blocos,
  )
  modelosVistoria: ModeloVistoriaEntity[];

  @OneToMany(() => CampoEntity, (campo) => campo.bloco)
  campos: CampoEntity[];

  @OneToMany(() => BlocoImagemEntity, (imagem) => imagem.bloco)
  imagens: BlocoImagemEntity[];
}
