import { Body, Controller, Param, Post, Put } from '@nestjs/common';
import { BaseController } from '../../base/base.controller';
import {
  CreateBlocoDto,
  UpdateBlocoDto,
} from '../../template-modelo-vistoria/dto/bloco.dto';
import { ApiTags } from '@nestjs/swagger';
import { UsuariosEntity } from '../entity/usuario.entity';
import { UsuariosService } from '../service/usuarios.service';
import { ConfigService } from '@nestjs/config';

@ApiTags('Usuario')
@Controller('usuarios')
export class UsuariosController extends BaseController<UsuariosEntity> {
  constructor(
    protected readonly baseService: UsuariosService,
    protected readonly configService: ConfigService,
  ) {
    super(baseService);
  }
  @Post()
  async create(@Body() createDto: CreateBlocoDto): Promise<UsuariosEntity> {
    return super.create(createDto);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateDto: UpdateBlocoDto,
  ): Promise<UsuariosEntity> {
    return this.baseService.updateComSenha(id, updateDto, this.configService);
  }
}
