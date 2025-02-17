import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EnderecoEntity } from './entity/endereco.entity';
import { EstadoEntity } from './entity/estado.entity';
import { MunicipioEntity } from './entity/municipio.entity';
import { PessoaEntity } from './entity/pessoa.entity';
import { TelefoneEntity } from './entity/telefone.entity';
import { TipoEnderecoEntity } from './entity/tipoEndereco.entity';
import { TipoTelefoneEntity } from './entity/tipoTelefone.entity';
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
import { MockService } from './service/mock.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      EnderecoEntity,
      EstadoEntity,
      MunicipioEntity,
      PessoaEntity,
      TelefoneEntity,
      TipoEnderecoEntity,
      TipoTelefoneEntity,
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
    MockService
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
  exports: [TypeOrmModule,MockService],
})
export class ComumModule {}
