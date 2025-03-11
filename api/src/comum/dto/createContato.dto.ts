import { BaseModelDto } from '../../base/dto/baseModel.dto';
import { ApiProperty } from '@nestjs/swagger';
import { CreateTelefoneDto } from './createTelefone.dto';
import { CreateEnderecoDto } from './createEndereco.dto';
import { CreateEmailDto } from './createEmail.dto';
import { IsOptional } from 'class-validator';

export class CreateCotantoDto extends BaseModelDto {
  @ApiProperty()
  descricao: string;

  @ApiProperty()
  @IsOptional()
  clienteId: string;

  @ApiProperty()
  @IsOptional()
  clienteFinalId: string;

  @ApiProperty()
  @IsOptional()
  pessoaId: string;

  @IsOptional()
  @ApiProperty({ type: () => [CreateTelefoneDto] })
  telefones: CreateTelefoneDto[];

  @IsOptional()
  @ApiProperty({ type: () => [CreateEnderecoDto] })
  enderecos: CreateEnderecoDto[];

  @IsOptional()
  @ApiProperty({ type: () => [CreateEmailDto] })
  emails: CreateEmailDto[];
}
