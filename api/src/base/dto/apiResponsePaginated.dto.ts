import { ApiProperty } from '@nestjs/swagger';
import { ApiResponseDto } from './apiResponse.dto';

export class ApiResponsePaginatedDto<T> extends ApiResponseDto<T> {
  @ApiProperty()
  currentPage: number;

  @ApiProperty({ example: 0, description: 'Número total de itens', required: false })
  total?: number;
}