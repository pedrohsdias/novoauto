import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';
import { CreateEmailDto } from './createEmail.dto';

export class UpdateEmailDto extends CreateEmailDto {
  @ApiProperty()
  @IsOptional()
  id: string;
}
