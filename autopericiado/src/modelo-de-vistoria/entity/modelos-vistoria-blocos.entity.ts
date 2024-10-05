import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { ModeloVistoria } from './modelo-vistoria.entity';
import { Blocos } from './blocos.entity';

@Entity('modelos_vistoria_blocos')
export class ModelosVistoriaBlocos {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => ModeloVistoria, (mv) => mv.modelosVistoriaBlocos)
  @JoinColumn({ name: 'modelo_vistoria_id' })
  modeloVistoria: ModeloVistoria;

  @ManyToOne(() => Blocos, (blocos) => blocos.modelosVistoriaBlocos)
  @JoinColumn({ name: 'blocos_id' })
  blocos: Blocos;
}
