import { IsOptional } from 'class-validator';

export class BaseDto {
  @IsOptional()
  id: number;
  @IsOptional()
  createdAt: Date;
  @IsOptional()
  updatedAt: Date;
  @IsOptional()
  deletedAt: Date;
}
