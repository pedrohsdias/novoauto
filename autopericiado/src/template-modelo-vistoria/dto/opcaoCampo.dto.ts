import {
  IsBoolean,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { NivelRiscoEnum } from '../enum/nivelRisco.enum';
import { BaseDto } from '../../base/base.dto';

export class CreateOpcaoCampoDto extends BaseDto {
  @IsNotEmpty()
  @IsString()
  nome: string;
  alias: string;
  @IsBoolean()
  ehPadrao?: boolean;
  @IsEnum(NivelRiscoEnum)
  nivelRisco: string; // Pode ser um Enum, dependendo de como está definido
  @IsNumber()
  campoId: number; // ID do campo associado
}

export class UpdateOpcaoCampoDto extends CreateOpcaoCampoDto {
  @IsOptional()
  nome: string;
  @IsOptional()
  alias: string;
  @IsOptional()
  ehPadrao: boolean;
  @IsOptional()
  nivelRisco: string;
  @IsOptional()
  campoId: number;
}
