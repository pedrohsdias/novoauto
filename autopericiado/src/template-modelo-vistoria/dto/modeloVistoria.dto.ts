import {
  IsNotEmpty,
  IsArray,
  IsNumber,
  IsString,
  IsOptional,
} from 'class-validator';
import { BaseDto } from '../../base/base.dto';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateModeloVistoriaDto extends BaseDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  nome: string;
  @IsArray()
  @IsNumber({}, { each: true })
  @ApiProperty({ type: [Number] })
  blocos: number[]; // Array de IDs dos blocos associados
}

export class UpdateModeloVistoriaDto extends CreateModeloVistoriaDto {
  @IsOptional()
  @ApiPropertyOptional()
  nome: string;
  @IsOptional()
  @IsArray()
  @IsNumber({}, { each: true })
  @ApiPropertyOptional()
  blocos: number[];
}
