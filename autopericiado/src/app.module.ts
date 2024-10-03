import { Module } from '@nestjs/common';
import { ModeloVistoriaModule } from './modelo-de-vistoria/ModeloVistoria.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppDataSource } from './config/data-source';
import { ModeloVistoriaService } from './modelo-de-vistoria/service/ModeloVistoria.service';

@Module({
  imports: [ModeloVistoriaModule, TypeOrmModule.forRoot(AppDataSource.options)],
  controllers: [],
  providers: [ModeloVistoriaService],
})
export class AppModule {}
