import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ClientesEntity } from './entity/clientes.entity';
import { OrdensServicoEntity } from './entity/ordensServico.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ClientesEntity, OrdensServicoEntity])],
  providers: [],
  controllers: [],
  exports: [TypeOrmModule],
})
export class VistoriaModule {}
