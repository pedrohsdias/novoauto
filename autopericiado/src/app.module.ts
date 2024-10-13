import { Module } from '@nestjs/common';
import { TemplateModeloVistoriaModule } from './template-modelo-vistoria/TemplateModeloVistoriaModule';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DbConfigService } from './config/data-source';
import { ComumModule } from './comum/comum.module';
import { FranquiaModule } from './franquia/franquia.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: DbConfigService,
      inject: [DbConfigService],
    }),
    TemplateModeloVistoriaModule,
    ComumModule,
    FranquiaModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
