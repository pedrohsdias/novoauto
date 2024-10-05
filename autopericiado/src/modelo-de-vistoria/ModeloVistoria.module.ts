import { Module } from '@nestjs/common';
import { ModeloVistoriaRepository } from './repository/ModeloVistoria.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ModeloVistoria } from './entity/modelo-vistoria.entity';
import { ModeloVistoriaService } from './service/ModeloVistoria.service';
import { ModeloVistoriaController } from './controller/ModeloVistoria.controller';
import { Blocos } from './entity/blocos.entity';
import { Campos } from './entity/campos.entity';
import { ModelosVistoriaBlocos } from './entity/modelos-vistoria-blocos.entity';
import { OpcoesCampo } from './entity/opcoes-campo.entity';
import { TiposCampo } from './entity/tipos-campo.entity';
import { TiposBloco } from './entity/tipos-bloco.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ModeloVistoria,
      Blocos,
      Campos,
      ModelosVistoriaBlocos,
      OpcoesCampo,
      TiposCampo,
      TiposBloco,
    ]),
  ],
  providers: [ModeloVistoriaService, ModeloVistoriaRepository],
  controllers: [ModeloVistoriaController],
  exports: [ModeloVistoriaRepository],
})
export class ModeloVistoriaModule {}
