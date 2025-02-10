import { IsOptional, IsInt, IsString, IsIn } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class BaseRequestFindAllDto {
  @ApiPropertyOptional({ example: 10, description: 'Número de registros por página', default: 10 })
  @IsOptional()
  @IsInt()
  rowsPerPage?: number;

  @ApiPropertyOptional({ example: 0, description: 'Página atual', default: 0 })
  @IsOptional()
  @IsInt()
  page?: number;

  @ApiPropertyOptional({ example: 'name', description: 'Campo pelo qual ordenar', default: 'id' })
  @IsOptional()
  @IsString()
  orderBy?: string;

  @ApiPropertyOptional({ example: 'asc', description: 'Ordem da listagem', enum: ['asc', 'desc'], default: 'asc' })
  @IsOptional()
  @IsIn(['asc', 'desc'])
  order?: 'asc' | 'desc';
}
