import { BaseModelDto } from '../../../base/dto/baseModel.dto';
import { ApiProperty } from '@nestjs/swagger';
import { RequestsTelefoneDto, UpdateTelefoneDto } from './requestsTelefone.dto';
import { RequestsEnderecoDto, UpdateEnderecoDto } from './requestsEndereco.dto';
import { RequestsEmailDto, UpdateEmailDto } from './requestsEmail.dto';
import { IsOptional } from 'class-validator';

export class CreateContatoDto extends BaseModelDto {
  @ApiProperty()
  descricao: string;

  @ApiProperty()
  @IsOptional()
  clienteId: string;

  @ApiProperty()
  tipoId: string;

  @ApiProperty()
  @IsOptional()
  clienteFinalId: string;

  @ApiProperty()
  @IsOptional()
  pessoaId: string;

  @IsOptional()
  @ApiProperty({ type: () => [RequestsTelefoneDto] })
  telefones: RequestsTelefoneDto[];

  @IsOptional()
  @ApiProperty({ type: () => [RequestsEnderecoDto] })
  enderecos: RequestsEnderecoDto[];

  @IsOptional()
  @ApiProperty({ type: () => [RequestsEmailDto] })
  emails: RequestsEmailDto[];
}

export class UpdateContatoDto extends CreateContatoDto {
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
  @ApiProperty({ type: () => [UpdateTelefoneDto] })
  telefones: UpdateTelefoneDto[];

  @IsOptional()
  @ApiProperty({ type: () => [UpdateEnderecoDto] })
  enderecos: UpdateEnderecoDto[];

  @IsOptional()
  @ApiProperty({ type: () => [UpdateEmailDto] })
  emails: UpdateEmailDto[];
}
