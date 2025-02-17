import { Body, Controller, Param, Post, Put } from '@nestjs/common';
import { BaseCrudController } from '../../base/baseCrud.controller';
import {
  CreateBlocoDto,
  UpdateBlocoDto,
} from '../../template-modelo-vistoria/dto/bloco.dto';
import { TelefoneEntity } from '../entity/telefone.entity';
import { TelefonesService } from '../service/telefones.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateTelefoneDto } from '../dto/createTelefone.dto';

@ApiTags('Telefone')
@Controller('telefones')
export class TelefonesController extends BaseCrudController<TelefoneEntity> {
  constructor(protected readonly baseService: TelefonesService) {
    super(baseService);
  }
  @Post()
  async create(@Body() createDto: CreateTelefoneDto): Promise<TelefoneEntity> {
    return super.create(createDto);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateDto: UpdateBlocoDto,
  ): Promise<TelefoneEntity> {
    return super.update(id, updateDto);
  }
}
