import { BaseModelDto } from '../../base/dto/baseModel.dto';
import { TipoClienteEnum } from '../enum/tipoCliente.enum';
import { ApiProperty } from '@nestjs/swagger';
import { TipoPessoaEnum } from '../../comum/enum/tipoPessoa.enum';
import { IsEnum, IsOptional, IsString } from 'class-validator';

export class CreateClienteDto extends BaseModelDto {
  @ApiProperty({
    description:
      'Referência interna para o cliente. Deixe em branco para ser gerado um ID numérico.',
    example: 'Cliente123',
  })
  @IsOptional()
  @IsString()
  apelido: string;

  @ApiProperty({
    description: 'Tipo de Cliente',
    enum: TipoClienteEnum,
    example: TipoClienteEnum.EMPRESA_UNICA,
  })
  @IsEnum(TipoClienteEnum)
  tipoCliente: TipoClienteEnum;

  @ApiProperty({
    description: 'Nome fantasia quando cliente for PJ',
    example: 'João Silva LTDA',
  })
  @IsString()
  nomeSocial: string;

  @ApiProperty({
    description: 'Razão social quando cliente for PJ',
    example: 'João da Silva',
  })
  @IsString()
  nomeFormal: string;

  @ApiProperty({
    description: 'Documento do cliente (CPF/CNPJ), com ou sem mascara',
    example: '123.456.789-00',
  })
  @IsString()
  documento: string;

  @ApiProperty({
    description: 'Tipo de Pessoa',
    enum: TipoPessoaEnum,
    example: TipoPessoaEnum.PJ,
  })
  @IsEnum(TipoPessoaEnum)
  tipoPessoa: TipoPessoaEnum;

  @ApiProperty()
  matrizId: string;

  @ApiProperty({
    description: 'Link gerado após upload da logo do cliente',
  })
  linkLogo: string;
}
