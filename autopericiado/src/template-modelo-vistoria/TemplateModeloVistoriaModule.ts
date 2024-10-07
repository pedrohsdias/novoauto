import { Module } from '@nestjs/common';
import { ModeloVistoriaRepository } from './repository/modeloVistoria.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ModelosVistoria } from './entity/modelosVistoria.entity';
import { ModeloVistoriaService } from './service/modeloVistoria.service';
import { ModelosVistoriaController } from './controller/modelosVistoria.controller';
import { Blocos } from './entity/blocos.entity';
import { Campos } from './entity/campos.entity';
import { OpcoesCampo } from './entity/opcoesCampo.entity';
import { TiposCampo } from './entity/tiposCampo.entity';
import { TiposBloco } from './entity/tiposBloco.entity';
import { BlocosRepository } from './repository/blocos.repository';
import { CamposRepository } from './repository/campos.repository';
import { OpcoesCampoRepository } from './repository/opcoesCampo.repository';
import { TiposCampoRepository } from './repository/tiposCampo.repository';
import { TiposBlocoRepository } from './repository/tiposBloco.repository';
import { BlocosController } from './controller/blocos.controller';
import { BlocosService } from './service/blocos.service';
import { CamposController } from './controller/campos.controller';
import { CamposService } from './service/campos.service';
import { OpcoesCampoController } from './controller/opcoesCampo.controller';
import { OpcoesCampoService } from './service/opcoesCampo.service';
import { TiposBlocoController } from './controller/tiposBloco.controller';
import { TiposCampoService } from './service/tiposCampo.service';
import { TiposCampoController } from './controller/tiposCampo.controller';
import { TiposBlocoService } from './service/tiposBloco.service';

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
  providers: [
    BlocosRepository,
    BlocosService,
    ModeloVistoriaRepository,
    ModeloVistoriaService,
    CamposRepository,
    CamposService,
    OpcoesCampoRepository,
    OpcoesCampoService,
    TiposCampoRepository,
    TiposCampoService,
    TiposBlocoRepository,
    TiposBlocoService,
  ],
  controllers: [
    ModelosVistoriaController,
    BlocosController,
    CamposController,
    OpcoesCampoController,
    TiposBlocoController,
    TiposCampoController,
  ],
  exports: [ModeloVistoriaRepository, BlocosRepository],
})
export class TemplateModeloVistoriaModule {}
