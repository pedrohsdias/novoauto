import { IsObject, IsOptional, IsString } from 'class-validator';
import { CreateEnderecoDto } from '../../comum/dto/createEndereco.dto';
import { ApiProperty } from '@nestjs/swagger';

export class QueryDto {
  @IsString()
  @ApiProperty({
    description: 'CNPJ sem mascara',
    example: '28348641000150',
    enum: ['28348641000150', '44133410000186', '48551805000150']})
  cnpj: string;
}


  export class ResponseDto {
    @IsString()
    cnpj: string;

    @IsString()
    razaoSocial: string;

    @IsString()
    nomeFantasia: string;

    @IsString()
    situacao: string;

    @IsObject()
    endereco: CreateEnderecoDto;

    @IsOptional()
    @IsString()
    telefone?: string;

    @IsOptional()
    @IsString()
    email?: string;
  }
