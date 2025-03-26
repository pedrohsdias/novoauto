import { BaseModelDto } from '../../../base/dto/baseModel.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class RequestsEnderecoDto extends BaseModelDto {
  @ApiProperty()
  logradouro: string;
  @ApiProperty()
  numero: string;
  @ApiProperty()
  @IsOptional()
  complemento: string;
  @ApiProperty()
  cep: string;
  @ApiProperty()
  bairro: string;
  @ApiProperty()
  municipioId: string;
  @ApiProperty()
  tipoId: string;
}

export class UpdateEnderecoDto extends RequestsEnderecoDto {
  @ApiProperty()
  @IsOptional()
  id: string;
  @IsOptional()
  logradouro: string;
  @IsOptional()
  numero: string;
  @IsOptional()
  cep: string;
  @IsOptional()
  bairro: string;
  @IsOptional()
  municipioId: string;
  @IsOptional()
  tipoId: string;
}
