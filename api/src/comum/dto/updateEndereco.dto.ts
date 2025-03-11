import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';
import { CreateEnderecoDto } from './createEndereco.dto';

export class UpdateEnderecoDto extends CreateEnderecoDto {
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
