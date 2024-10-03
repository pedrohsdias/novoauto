import { Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { ModeloVistoria } from './modelo-vistoria.entity';
import { Blocos } from './blocos.entity';

@Entity('modelos_vistoria_blocos')
export class ModelosVistoriaBlocos {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => ModeloVistoria, (modeloVistoria) => modeloVistoria.modelosVistoriaBlocos)
  modeloVistoria: ModeloVistoria;

  @ManyToOne(() => Blocos, (blocos) => blocos.modelosVistoriaBlocos)
  blocos: Blocos;
}
