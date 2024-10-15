import { Module } from '@nestjs/common';
import { AuthService } from './service/auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';
import { UsuariosEntity } from './entity/usuario.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VistoriaModule } from '../vistoria/vistoria.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthController } from './controller/auth.controller';
import { UsuariosController } from './controller/usuario.controller';
import { JwtModule } from '@nestjs/jwt';
import { UsuariosService } from './service/usuarios.service';
import { UsuariosRepository } from './repository/usuarios.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([UsuariosEntity]),
    PassportModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('APP_KEY'),
        signOptions: { expiresIn: '60m' },
      }),
    }),
    VistoriaModule,
  ],
  controllers: [AuthController, UsuariosController],
  providers: [AuthService, JwtStrategy, UsuariosService, UsuariosRepository],
  exports: [TypeOrmModule],
})
export class AuthModule {}
