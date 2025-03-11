import { BaseModelDto } from '../../base/dto/baseModel.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class CreateEnderecoDto extends BaseModelDto {
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
