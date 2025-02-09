import { IsNotEmpty, IsString, IsNumber, IsOptional } from 'class-validator';
import { BaseModelDto } from '../../base/dto/baseModel.dto';
import { ApiProperty } from '@nestjs/swagger';
export class CreateBlocoDto extends BaseModelDto {
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
