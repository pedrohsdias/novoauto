import { IsOptional, IsInt, IsString, IsIn } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { BaseRequestFindAllDto } from '../../base/dto/baseRequestFindAll.dto';

export class RequestAutoCompleteDto extends BaseRequestFindAllDto{

  @ApiPropertyOptional()
  @IsOptional()
  param?: string;
}