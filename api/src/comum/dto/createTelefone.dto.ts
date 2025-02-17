import { BaseModelDto } from '../../base/dto/baseModel.dto';
import { TipoPessoaEnum } from '../enum/tipoPessoa.enum';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTelefoneDto extends BaseModelDto {
  @ApiProperty()
  numero: string;
  @ApiProperty()
  pessoaId:string;
  @ApiProperty()
  telefoneId:string;

}
