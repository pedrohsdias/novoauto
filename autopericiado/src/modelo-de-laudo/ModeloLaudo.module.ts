import { Module } from '@nestjs/common';
import { ModeloLaudoRepository } from './repository/ModeloLaudo.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ModeloLaudo } from './entity/modelo-laudo.entity';
import { ModeloLaudoService } from './service/ModeloLaudo.service';
import { ModeloLaudoController } from './controller/ModeloLaudo.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ModeloLaudo])],
  providers: [ModeloLaudoService, ModeloLaudoRepository],
  controllers: [ModeloLaudoController],
  exports: [ModeloLaudoRepository],
})
export class ModeloLaudoModule {}
