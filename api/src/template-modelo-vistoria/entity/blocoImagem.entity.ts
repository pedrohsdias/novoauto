import { Entity, Column, OneToMany, ManyToOne, JoinColumn } from 'typeorm';
import { BaseEntity } from '../../base/base.entity';
import { BlocoEntity } from './bloco.entity';
import { TipoVeiculoEnum } from '../enum/tipoVeiculo.enum';
import { CampoCoordenadaImagemEntity } from './campoCoordenadasImagem.entity';

@Entity('bloco_imagens')
export class BlocoImagemEntity extends BaseEntity {
  @Column({ length: 75 })
  nome: string;

  @Column({
    name: 'imagem_caminho',
    comment: 'Somente preenchido quando tipo bloco = imagem',
  })
  imagemCaminho: string;

  @Column({
    name: 'tipo_veiculo',
    type: 'enum',
    enum: TipoVeiculoEnum,
    default: TipoVeiculoEnum.GENERICO,
  })
  tipo: TipoVeiculoEnum;

  @ManyToOne(() => BlocoEntity, (bloco) => bloco.imagens)
  @JoinColumn({ name: 'bloco_id' })
  bloco: BlocoEntity;

  @OneToMany(() => CampoCoordenadaImagemEntity, (coordenada) => coordenada.campo)
  coordenadas: CampoCoordenadaImagemEntity[];
}
