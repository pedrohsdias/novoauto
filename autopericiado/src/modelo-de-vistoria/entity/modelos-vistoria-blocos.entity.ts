import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { ModelosVistoria } from './modelos-vistoria.entity';
import { Blocos } from './blocos.entity';

@Entity('modelos_vistoria_blocos')
export class ModelosVistoriaBlocos {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => ModelosVistoria, (mv) => mv.modelosVistoriaBlocos)
  @JoinColumn({ name: 'modelo_vistoria_id' })
  modeloVistoria: ModelosVistoria;

  @ManyToOne(() => Blocos, (blocos) => blocos.modelosVistoriaBlocos)
  @JoinColumn({ name: 'bloco_id' })
  blocos: Blocos;
}
