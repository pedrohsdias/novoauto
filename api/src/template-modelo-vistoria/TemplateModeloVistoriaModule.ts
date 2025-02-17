import { Module } from '@nestjs/common';
import { ModeloVistoriaRepository } from './repository/modeloVistoria.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ModeloVistoriaEntity } from './entity/modeloVistoria.entity';
import { ModeloVistoriaService } from './service/modeloVistoria.service';
import { ModelosVistoriaController } from './controller/modelosVistoria.controller';
import { BlocoEntity } from './entity/bloco.entity';
import { CampoEntity } from './entity/campo.entity';
import { OpcaoCampoEntity } from './entity/opcaoCampo.entity';
import { BlocosRepository } from './repository/blocos.repository';
import { CamposRepository } from './repository/campos.repository';
import { OpcoesCampoRepository } from './repository/opcoesCampo.repository';
import { BlocosService } from './service/blocos.service';
import { CamposService } from './service/campos.service';
import { OpcoesCampoService } from './service/opcoesCampo.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ModeloVistoriaEntity,
      BlocoEntity,
      CampoEntity,
      OpcaoCampoEntity,
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
    // BlocosController,
    // CamposController,
    // OpcoesCampoController,
  ],
  exports: [
    TypeOrmModule,
    BlocosRepository,
    CamposRepository,
    ModeloVistoriaRepository,
    ModeloVistoriaService,
  ],
})
export class TemplateModeloVistoriaModule {}
