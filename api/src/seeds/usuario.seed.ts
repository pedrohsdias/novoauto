import { DataSource } from 'typeorm';
import { UsuariosEntity } from '../auth/entity/usuario.entity';
import { PerfilUsuarioEnum } from '../auth/enum/perfilUsuario.enum';
import * as bcrypt from 'bcrypt';

export class UsuarioSeed {
  async run(dataSource: DataSource): Promise<void> {
    const usuarioRepository = dataSource.getRepository(UsuariosEntity);
    const senha = await bcrypt.hash('123', 10);
    const usuario = [
      {
        nome: `ROOT`,
        email: `root@email.com`,
        perfil: PerfilUsuarioEnum.SIS_ADMIN,
        senha: senha,
      },
    ];

    await usuarioRepository.save(usuario);
  }
}
