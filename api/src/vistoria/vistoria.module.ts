import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { FranquiadoresController } from '../franquia/controller/franquiadores.controller';
import { ServicosController } from '../franquia/controller/servicos.controller';
import { UnidadesController } from '../franquia/controller/unidades.controller';
import { ClientesEntity } from './entity/clientes.entity';
import { OrdensServicoEntity } from './entity/ordensServico.entity';
import { UsuariosEntity } from '../auth/entity/usuario.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ClientesEntity,
      OrdensServicoEntity,
      UsuariosEntity,
    ]),
    UsuariosEntity,
  ],
  providers: [],
  controllers: [
    FranquiadoresController,
    ServicosController,
    UnidadesController,
  ],
  exports: [TypeOrmModule],
})
export class VistoriaModule {}
