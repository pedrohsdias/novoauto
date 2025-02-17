import { BaseModelDto } from '../../base/dto/baseModel.dto';
import { TipoPessoaEnum } from '../enum/tipoPessoa.enum';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePessoaDto extends BaseModelDto {
  @ApiProperty()
  apelido: string;
  @ApiProperty()
  nomeFormal: string;
  @ApiProperty()
  documento: string;
  @ApiProperty()
  tipo:TipoPessoaEnum;
}
