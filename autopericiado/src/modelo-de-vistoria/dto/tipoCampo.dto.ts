import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { CreateCampoDto } from './campo.dto';
import { BaseDto } from '../../base/base.dto';

export class CreateTipoCampoDto extends BaseDto {
  @IsNotEmpty()
  @IsString()
  nome: string;
}

export class UpdateTipoCampoDto extends CreateCampoDto {
  @IsOptional()
  nome: string;
}
