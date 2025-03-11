import { BaseModelDto } from '../../base/dto/baseModel.dto';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTelefoneDto extends BaseModelDto {
  @ApiProperty()
  numero: string;
  @ApiProperty()
  tipoId: string;
}
