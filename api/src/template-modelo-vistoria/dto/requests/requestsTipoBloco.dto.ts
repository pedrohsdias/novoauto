import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { BaseModelDto } from '../../../base/dto/baseModel.dto';

export class CreateTipoBlocoDto extends BaseModelDto {
  @IsNotEmpty()
  @IsString()
  nome: string;
  @IsString()
  descricao: string;
}

export class UpdateTipoBlocoDto extends CreateTipoBlocoDto {
  @IsOptional()
  nome: string;
  @IsOptional()
  descricao: string;
}
