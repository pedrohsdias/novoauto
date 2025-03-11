import { BaseModelDto } from '../../base/dto/baseModel.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsOptional } from 'class-validator';

export class CreateEmailDto extends BaseModelDto {
  @ApiProperty()
  @IsEmail()
  email: string;

  @IsOptional()
  @ApiProperty({ default: false })
  ehPrincipal: boolean;
}
