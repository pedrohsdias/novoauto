import { Module } from '@nestjs/common';
import { TemplateModeloVistoriaModule } from './template-modelo-vistoria/TemplateModeloVistoriaModule';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DbConfigService } from './config/data-source';
import { ComumModule } from './comum/comum.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/AuthModule';
import { ClienteModule } from './cliente/cliente.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: undefined,
      useClass: DbConfigService,
      inject: [DbConfigService]
    }),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TemplateModeloVistoriaModule,
    ComumModule,
    ClienteModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
