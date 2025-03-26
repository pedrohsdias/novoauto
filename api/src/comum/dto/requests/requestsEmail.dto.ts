import { BaseModelDto } from '../../../base/dto/baseModel.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsOptional } from 'class-validator';

export class RequestsEmailDto extends BaseModelDto {
  @ApiProperty()
  @IsEmail()
  email: string;

  @IsOptional()
  @ApiProperty({ default: false })
  ehPrincipal: boolean;
}

export class UpdateEmailDto extends RequestsEmailDto {
  @ApiProperty()
  @IsOptional()
  id: string;
}
