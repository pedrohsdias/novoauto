import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientesController } from './controller/clientes.controller';
import { ServicosController } from './controller/servicos.controller';
import { ClientesService } from './service/clientes.service';
import { ClientesRepository } from './repository/clientes.repository';
import { ServicosRepository } from './repository/servicos.repository';
import { ServicosService } from './service/servicos.service';
import { ServicosEntity } from './entity/servicos.entity';
import { ClienteEntity } from './entity/cliente.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ClienteEntity,
      ServicosEntity,
    ]),
  ],
  providers: [
    ClientesRepository,
    ClientesService,
    ServicosRepository,
    ServicosService,
  ],
  controllers: [
    ClientesController,
    ServicosController,
  ],
  exports: [TypeOrmModule],
})
export class ClienteModule {}
