import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EnderecosEntity } from './entity/enderecos.entity';
import { EstadosEntity } from './entity/estados.entity';
import { MunicipiosEntity } from './entity/municipios.entity';
import { PessoasEntity } from './entity/pessoas.entity';
import { TelefonesEntity } from './entity/telefones.entity';
import { TiposEnderecoEntity } from './entity/tiposEndereco.entity';
import { TiposTelefoneEntity } from './entity/tiposTelefone.entity';
import { EnderecosRepository } from './repository/enderecos.repository';
import { TiposEnderecoRepository } from './repository/tiposEndereco.repository';
import { EnderecosService } from './service/enderecos.service';
import { TiposEnderecoService } from './service/tiposEndereco.service';
import { TiposTelefoneRepository } from './repository/tiposTelefone.repository';
import { EstadosService } from './service/estados.service';
import { EstadosRepository } from './repository/estados.repository';
import { MunicipiosService } from './service/municipios.service';
import { MunicipiosRepository } from './repository/municipios.repository';
import { PessoasService } from './service/pessoas.service';
import { PessoasRepository } from './repository/pessoas.repository';
import { TelefonesService } from './service/telefones.service';
import { TelefonesRepository } from './repository/telefones.repository';
import { TiposTelefoneService } from './service/tiposTelefone.service';
import { EstadosController } from './controller/estados.controller';
import { TiposTelefoneController } from './controller/tiposTelefone.controller';
import { TiposEnderecoController } from './controller/tiposEndereco.controller';
import { TelefonesController } from './controller/telefones.controller';
import { MunicipiosController } from './controller/municipios.controller';
import { EnderecosController } from './controller/enderecos.controller';
import { PessoasController } from './controller/pessoas.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      EnderecosEntity,
      EstadosEntity,
      MunicipiosEntity,
      PessoasEntity,
      TelefonesEntity,
      TiposEnderecoEntity,
      TiposTelefoneEntity,
    ]),
  ],
  providers: [
    EnderecosService,
    EnderecosRepository,
    EstadosService,
    EstadosRepository,
    MunicipiosService,
    MunicipiosRepository,
    PessoasService,
    PessoasRepository,
    TelefonesService,
    TelefonesRepository,
    TiposEnderecoService,
    TiposEnderecoRepository,
    TiposTelefoneService,
    TiposTelefoneRepository,
  ],
  controllers: [
    EnderecosController,
    EstadosController,
    MunicipiosController,
    // PessoasController,
    TelefonesController,
    TiposEnderecoController,
    TiposTelefoneController,
  ],
  exports: [TypeOrmModule],
})
export class ComumModule {}
