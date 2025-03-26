import { ApiProperty } from '@nestjs/swagger';

export class ApiResponseDto<T> {
  @ApiProperty({ example: 'success' })
  message: string;

  @ApiProperty({
    isArray: true,
    type: Object,
    description: 'Dados retornados na resposta',
  })
  data?: T;

  @ApiProperty({
    example: null,
    description: 'Possíveis erros na resposta',
    required: false,
  })
  errors?: string[];
}
