import { BaseModelDto } from '../../../base/dto/baseModel.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class RequestsTelefoneDto extends BaseModelDto {
  @ApiProperty()
  numero: string;
  @ApiProperty()
  tipoId: string;
}
export class UpdateTelefoneDto extends RequestsTelefoneDto {
  @ApiProperty()
  @IsOptional()
  id: string;
  @IsOptional()
  numero: string;
  @IsOptional()
  tipoId: string;
}
