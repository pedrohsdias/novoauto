import { IsObject, IsOptional, IsString } from 'class-validator';
import { CreateEnderecoDto } from '../../comum/dto/createEndereco.dto';
import { ApiProperty } from '@nestjs/swagger';

export class QueryDto {
  @IsString()
  @ApiProperty()
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
