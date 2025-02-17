import { BaseModelDto } from '../../base/dto/baseModel.dto';
import { TipoClienteEnum } from '../enum/tipoCliente.enum';
import { ApiProperty } from '@nestjs/swagger';
import { CreatePessoaDto } from '../../comum/dto/createPessoa.dto';

export class CreateClienteDto extends BaseModelDto {
  @ApiProperty()
  apelido: string;
  @ApiProperty()
  tipo: TipoClienteEnum;
  @ApiProperty()
  nome: string;
  @ApiProperty()
  pessoa: CreatePessoaDto;
}
