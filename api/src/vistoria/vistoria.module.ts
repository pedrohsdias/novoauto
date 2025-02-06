import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ClienteFinalEntity } from './entity/clienteFinal.entity';
import { OrdensServicoEntity } from './entity/ordensServico.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ClienteFinalEntity, OrdensServicoEntity])],
  providers: [],
  controllers: [],
  exports: [TypeOrmModule],
})
export class VistoriaModule {}
