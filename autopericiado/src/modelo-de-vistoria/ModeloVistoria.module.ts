import { Module } from '@nestjs/common';
import { ModeloVistoriaRepository } from './repository/modeloVistoria.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ModelosVistoria } from './entity/modelos-vistoria.entity';
import { ModeloVistoriaService } from './service/modeloVistoria.service';
import { ModeloVistoriaController } from './controller/ModeloVistoria.controller';
import { Blocos } from './entity/blocos.entity';
import { Campos } from './entity/campos.entity';
import { OpcoesCampo } from './entity/opcoes-campo.entity';
import { TiposCampo } from './entity/tipos-campo.entity';
import { TiposBloco } from './entity/tipos-bloco.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ModelosVistoria,
      Blocos,
      Campos,
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
