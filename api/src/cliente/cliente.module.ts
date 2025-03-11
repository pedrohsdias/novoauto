import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientesController } from './controller/clientes.controller';
import { ServicosController } from './controller/servicos.controller';
import { ClientesService } from './service/clientes.service';
import { ClientesRepository } from './repository/clientes.repository';
import { ServicosRepository } from './repository/servicos.repository';
import { ServicosService } from './service/servicos.service';
import { ServicoEntity } from './entity/servico.entity';
import { ClienteEntity } from './entity/cliente.entity';
import { PessoasService } from '../comum/service/pessoas.service';
import { PessoasRepository } from '../comum/repository/pessoas.repository';

@Module({
  imports: [TypeOrmModule.forFeature([ClienteEntity, ServicoEntity])],
  providers: [
    ClientesRepository,
    ClientesService,
    ServicosRepository,
    ServicosService,
    PessoasService,
    PessoasRepository,
  ],
  controllers: [ClientesController, ServicosController],
  exports: [TypeOrmModule],
})
export class ClienteModule {}
