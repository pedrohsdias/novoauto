import { BaseModelDto } from '../../../base/dto/baseModel.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class CreateTipoDto extends BaseModelDto {
  @ApiProperty()
  descricao: string;
}

export class UpdateTipoDto extends CreateTipoDto {
  @ApiProperty()
  @IsOptional()
  descricao: string;
}
