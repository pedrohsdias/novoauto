import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { BaseDto } from '../../base/base.dto';

export class CreateTipoBlocoDto extends BaseDto {
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
