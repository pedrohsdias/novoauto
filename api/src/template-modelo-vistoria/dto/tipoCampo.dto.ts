import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { CreateCampoDto } from './campo.dto';
import { BaseModelDto } from '../../base/dto/baseModel.dto';

export class CreateTipoCampoDto extends BaseModelDto {
  @IsNotEmpty()
  @IsString()
  nome: string;
}

export class UpdateTipoCampoDto extends CreateCampoDto {
  @IsOptional()
  nome: string;
}
