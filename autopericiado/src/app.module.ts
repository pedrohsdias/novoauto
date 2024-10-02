import { Module } from '@nestjs/common';
import { ModeloLaudoModule } from './modelo-de-laudo/ModeloLaudo.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppDataSource } from './config/data-source';
import { ModeloLaudoService } from './modelo-de-laudo/service/ModeloLaudo.service';

@Module({
  imports: [ModeloLaudoModule, TypeOrmModule.forRoot(AppDataSource.options)],
  controllers: [],
  providers: [ModeloLaudoService],
})
export class AppModule {}
