import { BaseModelDto } from '../../../base/dto/baseModel.dto';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUsuarioDto extends BaseModelDto {
  @ApiProperty()
  descricao: string;
}

export class UpdateUsuarioDto extends CreateUsuarioDto {}
