import { Module } from '@nestjs/common';
import { TemplateModeloVistoriaModule } from './template-modelo-vistoria/TemplateModeloVistoriaModule';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DbConfigService } from './config/data-source';
import { ComumModule } from './comum/comum.module';
import { FranquiaModule } from './franquia/franquia.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/AuthModule';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: DbConfigService,
      inject: [DbConfigService],
    }),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TemplateModeloVistoriaModule,
    ComumModule,
    FranquiaModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
