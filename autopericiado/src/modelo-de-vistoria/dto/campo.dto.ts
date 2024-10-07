import { IsNotEmpty, IsString, IsNumber, IsOptional } from 'class-validator';
import { BaseDto } from '../../base/base.dto';
export class CreateCampoDto extends BaseDto {
  @IsNotEmpty()
  @IsString()
  nome: string;
  // alias?: string;
  @IsNotEmpty()
  @IsNumber()
  qtdSelecionado: number;
  @IsNotEmpty()
  @IsNumber()
  tipoCampoId: number; // ID do tipo de campo
  @IsNotEmpty()
  @IsNumber()
  blocoId: number; // ID do bloco ao qual o campo pertence
}

export class UpdateCampoDto extends CreateCampoDto {
  @IsOptional()
  nome: string;
  // alias?: string;
  @IsOptional()
  qtdSelecionado: number;
  @IsOptional()
  tipoCampoId: number;
  @IsOptional()
  blocoId: number;
}
