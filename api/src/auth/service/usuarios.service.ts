import { Injectable, NotFoundException } from '@nestjs/common';
import { BaseService } from '../../base/base.service';
import { UsuariosEntity } from '../entity/usuario.entity';
import { UsuariosRepository } from '../repository/usuarios.repository';
import { BaseModelDto } from '../../base/dto/baseModel.dto';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class UsuariosService extends BaseService<UsuariosEntity> {
  constructor(protected readonly repository: UsuariosRepository) {
    super(repository);
  }
  async buscaPorEmail(email: string) {
    const checkEmail = await this.repository.findOne({
      where: { email },
    });

    if (checkEmail === null)
      throw new NotFoundException('O email não foi encontrado.');

    return checkEmail;
  }

  async updateComSenha(
    id: string,
    udpateDto: BaseModelDto,
    configService: ConfigService,
  ): Promise<UsuariosEntity> {
    //todo  - hashear senha
    configService.get<string>('APP_KEY');
    return super.update(id, udpateDto);
  }
}
