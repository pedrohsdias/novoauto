import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FranquiadoresController } from './controller/franquiadores.controller';
import { ServicosController } from './controller/servicos.controller';
import { UnidadesController } from './controller/unidades.controller';
import { FranquiadoresService } from './service/franquiadores.service';
import { FranquiadoresRepository } from './repository/franquiadores.repository';
import { ServicosRepository } from './repository/servicos.repository';
import { ServicosService } from './service/servicos.service';
import { UnidadesRepository } from './repository/unidades.repository';
import { UnidadesService } from './service/unidades.service';
import { FranquiadoresEntity } from './entity/franquiadores.entity';
import { ServicosEntity } from './entity/servicos.entity';
import { UnidadesEntity } from './entity/unidades.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      FranquiadoresEntity,
      ServicosEntity,
      UnidadesEntity,
    ]),
  ],
  providers: [
    FranquiadoresRepository,
    FranquiadoresService,
    ServicosRepository,
    ServicosService,
    UnidadesRepository,
    UnidadesService,
  ],
  controllers: [
    FranquiadoresController,
    ServicosController,
    UnidadesController,
  ],
  exports: [TypeOrmModule],
})
export class FranquiaModule {}
