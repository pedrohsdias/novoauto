import { IsNotEmpty, IsString, IsNumber, IsOptional } from 'class-validator';
import { BaseDto } from '../../base/base.dto';
import { ApiProperty } from '@nestjs/swagger';
export class CreateBlocoDto extends BaseDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  nome: string;
  @IsNumber()
  tipoBlocoId: string; // ID do tipo de bloco
}

export class UpdateBlocoDto extends CreateBlocoDto {
  @IsOptional()
  nome: string;
  @IsOptional()
  tipoBlocoId: string;
}
