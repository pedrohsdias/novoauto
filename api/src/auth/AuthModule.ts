import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './service/auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';
import { UsuariosEntity } from './entity/usuario.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VistoriaModule } from '../vistoria/vistoria.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([UsuariosEntity]),
    PassportModule,
    JwtModule.register({
      secret: 'YOUR_SECRET_KEY', // Substitua por uma chave secreta segura
      signOptions: { expiresIn: '60m' },
    }),
    VistoriaModule,
  ],
  providers: [AuthService, JwtStrategy],
  exports: [TypeOrmModule],
})
export class AuthModule {}
