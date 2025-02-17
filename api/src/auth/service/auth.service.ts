import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsuariosService } from './usuarios.service';
import * as bcrypt from 'bcrypt';
import { UsuariosEntity } from '../entity/usuario.entity';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly usuarioService: UsuariosService,
  ) {}

  async validateUser(email: string, senha: string): Promise<any> {
    const usuario = await this.usuarioService.buscaPorEmail(email);

    if (!usuario) {
      throw new UnauthorizedException('E-mail ou senha incorreto');
    }

    const senhaValida = await bcrypt.compare(senha, usuario.senha);
    if (!senhaValida) {
      throw new UnauthorizedException('E-mail ou senha incorreto');
    }
    return usuario;
  }

  async login(email: string, senha: string) {
    const usuario = await this.validateUser(email, senha);
    return this.buildTokens(usuario);
  }
  async refreshToken(refreshToken: string) {
    try {
      const payload = this.jwtService.verify(refreshToken);
      const usuario = await this.usuarioService.findById(payload.sub);
      if(usuario){
        return this.buildTokens(usuario);
      }
      throw new UnauthorizedException('Usuário não encontrado');
    } catch (e) {
      console.log(e);
      throw new UnauthorizedException(
        'Token de renovação inválido ou expirado',
      );
    }
  }
  async buildTokens(usuario: UsuariosEntity) {
    //todo adicionar mais valores ao paylod que vai formar o bearer
    const dadosToken = { username: usuario.nome, sub: usuario.id };
    const dadosRefresh = { sub: usuario.id };
    return {
      access_token: this.jwtService.sign(dadosToken),
      refresh_token: this.jwtService.sign(dadosRefresh, { expiresIn: '90m' }),
    };
  }
}
