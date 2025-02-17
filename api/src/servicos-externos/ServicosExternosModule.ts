import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServicosExternosController } from './controller/servicosExternos.controller';
import { MockService } from '../comum/service/mock.service';
import { BuscaCNPJService } from './Service/info-simples/buscaCNPJ.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
    ]),
  ],
  providers: [
    BuscaCNPJService,
    MockService
  ],
  controllers: [
    ServicosExternosController,
  ],
  exports: [
    TypeOrmModule,
  ],
})
export class ServicosExternosModule {}
