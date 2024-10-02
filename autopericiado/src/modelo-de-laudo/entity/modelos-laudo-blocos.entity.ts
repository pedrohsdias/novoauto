import { Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { ModeloLaudo } from './modelo-laudo.entity';
import { Blocos } from './blocos.entity';

@Entity('modelos_laudo_blocos')
export class ModelosLaudoBlocos {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => ModeloLaudo, (modeloLaudo) => modeloLaudo.modelosLaudoBlocos)
  modeloLaudo: ModeloLaudo;

  @ManyToOne(() => Blocos, (blocos) => blocos.modelosLaudoBlocos)
  blocos: Blocos;
}
