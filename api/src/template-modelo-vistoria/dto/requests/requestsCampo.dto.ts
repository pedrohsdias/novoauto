import { IsNotEmpty, IsString, IsNumber, IsOptional } from 'class-validator';
import { BaseModelDto } from '../../../base/dto/baseModel.dto';
export class CreateCampoDto extends BaseModelDto {
  @IsNotEmpty()
  @IsString()
  nome: string;
  // alias?: string;
  @IsNotEmpty()
  @IsNumber()
  qtdSelecionado: number;
  @IsNotEmpty()
  @IsNumber()
  tipoCampoId: string; // ID do tipo de campo
  @IsNotEmpty()
  @IsNumber()
  blocoId: string; // ID do bloco ao qual o campo pertence
}

export class UpdateCampoDto extends CreateCampoDto {
  @IsOptional()
  nome: string;
  // alias?: string;
  @IsOptional()
  qtdSelecionado: number;
  @IsOptional()
  tipoCampoId: string;
  @IsOptional()
  blocoId: string;
}
