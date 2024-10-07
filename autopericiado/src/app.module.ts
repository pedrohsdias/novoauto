import { Module } from '@nestjs/common';
import { TemplateModeloVistoriaModule } from './template-modelo-vistoria/TemplateModeloVistoriaModule';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DbConfigService } from './config/data-source';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: DbConfigService,
      inject: [DbConfigService],
    }),
    TemplateModeloVistoriaModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
