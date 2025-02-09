import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: 'root@email.com'})
  email: string;
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: '123'})
  senha: string;
}
