import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';
import { CreateTelefoneDto } from './createTelefone.dto';

export class UpdateTelefoneDto extends CreateTelefoneDto {
  @ApiProperty()
  @IsOptional()
  id: string;
  @IsOptional()
  numero: string;
  @IsOptional()
  tipoId: string;
}
