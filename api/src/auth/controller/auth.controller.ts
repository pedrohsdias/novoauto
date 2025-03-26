import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from '../service/auth.service';
import { LoginDto } from '../dto/requests/login.dto';
import { ApiTags } from '@nestjs/swagger';
import { RefreshDto } from '../dto/requests/refresh.dto';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() login: LoginDto) {
    return this.authService.login(login.email, login.senha);
  }

  @Post('refresh')
  async refresh(@Body() payload: RefreshDto) {
    return this.authService.refreshToken(payload.refresh_token);
  }
}
