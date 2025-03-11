import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';
import { CreateCotantoDto } from './createContato.dto';
import { UpdateEmailDto } from './updateEmail.dto';
import { UpdateEnderecoDto } from './updateEndereco.dto';
import { UpdateTelefoneDto } from './updateTelefone.dto';

export class UpdateCotantoDto extends CreateCotantoDto {
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
