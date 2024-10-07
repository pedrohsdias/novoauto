import { Module } from '@nestjs/common';
import { ModeloVistoriaModule } from './modelo-de-vistoria/ModeloVistoria.module';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { AppDataSource } from './config/data-source';
import { ModeloVistoriaService } from './modelo-de-vistoria/service/modeloVistoria.service';
import { DbConfigService } from './config/data-source';
// import { AutenticacaoModule } from './autenticacao/autenticacao.module';
// import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: DbConfigService,
      inject: [DbConfigService],
    }),
    ModeloVistoriaModule,
    // AutenticacaoModule,
    // ConfigModule.forRoot({
    //   isGlobal: true,
    // }),
  ],
  controllers: [],
  providers: [ModeloVistoriaService],
})
export class AppModule {}
