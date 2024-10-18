import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get<string>('APP_KEY'),
    });
  }

  async validate(payload: any) {
    if (payload.username === undefined) {
      throw new UnauthorizedException('Token no inválido ou expirado!');
    }
    //adiciona os dados do token a request
    //todo - adicionar mais valores ao payload repassado a aplicação
    return { userId: payload.sub, username: payload.username };
  }
}
