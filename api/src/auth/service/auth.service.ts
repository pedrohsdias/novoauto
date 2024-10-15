import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsuariosService } from './usuarios.service';
import bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly usuarioService: UsuariosService,
  ) {}

  async validateUser(email: string, senha: string): Promise<any> {
    const usuario = await this.usuarioService.buscaPorEmail(email);

    const usuarioAutenticado = await bcrypt.compare(senha, usuario.senha);
    if (!usuarioAutenticado) {
      throw new UnauthorizedException('E-mail ou senha incorreto');
    }
    return usuario;
  }

  async login(email: string, senha: string) {
    const usuario = await this.validateUser(email, senha);
    const payload = { username: usuario.nome, sub: usuario.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
