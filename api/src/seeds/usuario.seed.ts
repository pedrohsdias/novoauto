import { DataSource } from 'typeorm';
import { UsuariosEntity } from '../auth/entity/usuario.entity';
import { PerfilUsuarioEnum } from '../auth/enum/perfilUsuario.enum';
import { ConfigService } from '@nestjs/config';

export class UsuarioSeed {
  async run(dataSource: DataSource): Promise<void> {
    const usuarioRepository = dataSource.getRepository(UsuariosEntity);
    const configService = new ConfigService();
    const usuario = [
      {
        nome: 'DADOS DO VEICULO',
        tipo: PerfilUsuarioEnum.SIS_ADMIN,
        fontAwesomeIcon: 'fa-car-side',

        senha: configService.get<string>('APP_KEY'),
      },
    ];

    await usuarioRepository.save(usuario);
  }
}
