import { BaseModelDto } from '../../base/dto/baseModel.dto';
import { TipoPessoaEnum } from '../enum/tipoPessoa.enum';
import { ApiProperty } from '@nestjs/swagger';

export class CreateEnderecoDto extends BaseModelDto {
  @ApiProperty()
  logradouro: string;
  @ApiProperty()
  numero: string;
  @ApiProperty()
  complemento: string;
  @ApiProperty()
  cep: string;
  @ApiProperty()
  bairro: string;
  @ApiProperty()
  tipoId: string;
  @ApiProperty()
  municipioId: string;
  @ApiProperty()
  pessoaId: string;
}
