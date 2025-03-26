import { Controller } from '@nestjs/common';
import { BaseCrudController } from '../../base/baseCrud.controller';
import { ApiTags } from '@nestjs/swagger';
import { UsuariosEntity } from '../entity/usuario.entity';
import { UsuariosService } from '../service/usuarios.service';
import { ConfigService } from '@nestjs/config';
import {
  CreateUsuarioDto,
  UpdateUsuarioDto,
} from '../dto/requests/requestsUsuario.dto';

@ApiTags('Usuario')
@Controller('usuarios')
export class UsuariosController extends BaseCrudController<
  UsuariosEntity,
  CreateUsuarioDto,
  UpdateUsuarioDto
> {
  constructor(
    protected readonly baseService: UsuariosService,
    protected readonly configService: ConfigService,
  ) {
    super(baseService);
  }
}
