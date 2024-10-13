import { Module } from '@nestjs/common';
import { ModeloVistoriaRepository } from './repository/modeloVistoria.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ModelosVistoriaEntity } from './entity/modelosVistoria.entity';
import { ModeloVistoriaService } from './service/modeloVistoria.service';
import { ModelosVistoriaController } from './controller/modelosVistoria.controller';
import { BlocosEntity } from './entity/blocos.entity';
import { CamposEntity } from './entity/campos.entity';
import { OpcoesCampoEntity } from './entity/opcoesCampo.entity';
import { BlocosRepository } from './repository/blocos.repository';
import { CamposRepository } from './repository/campos.repository';
import { OpcoesCampoRepository } from './repository/opcoesCampo.repository';
import { BlocosController } from './controller/blocos.controller';
import { BlocosService } from './service/blocos.service';
import { CamposController } from './controller/campos.controller';
import { CamposService } from './service/campos.service';
import { OpcoesCampoController } from './controller/opcoesCampo.controller';
import { OpcoesCampoService } from './service/opcoesCampo.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ModelosVistoriaEntity,
      BlocosEntity,
      CamposEntity,
      OpcoesCampoEntity,
    ]),
  ],
  providers: [
    BlocosRepository,
    BlocosService,
    ModeloVistoriaRepository,
    ModeloVistoriaService,
    CamposRepository,
    CamposService,
    OpcoesCampoRepository,
    OpcoesCampoService,
  ],
  controllers: [
    ModelosVistoriaController,
    BlocosController,
    CamposController,
    OpcoesCampoController,
  ],
  exports: [
    ModeloVistoriaRepository,
    BlocosRepository,
    ModeloVistoriaRepository,
    ModeloVistoriaService,
  ],
})
export class TemplateModeloVistoriaModule {}
