import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ClienteFinalEntity } from './entity/clienteFinal.entity';
import { OrdemServicoEntity } from './entity/ordemServico.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ClienteFinalEntity, OrdemServicoEntity])],
  providers: [],
  controllers: [],
  exports: [TypeOrmModule],
})
export class VistoriaModule {}
