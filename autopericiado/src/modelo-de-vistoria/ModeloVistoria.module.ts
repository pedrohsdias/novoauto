import { Module } from '@nestjs/common';
import { ModeloVistoriaRepository } from './repository/ModeloVistoria.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ModeloVistoria } from './entity/modelo-vistoria.entity';
import { ModeloVistoriaService } from './service/ModeloVistoria.service';
import { ModeloVistoriaController } from './controller/ModeloVistoria.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ModeloVistoria])],
  providers: [ModeloVistoriaService, ModeloVistoriaRepository],
  controllers: [ModeloVistoriaController],
  exports: [ModeloVistoriaRepository],
})
export class ModeloVistoriaModule {}
