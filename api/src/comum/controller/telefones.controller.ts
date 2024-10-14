import { Body, Controller, Param, Post, Put } from '@nestjs/common';
import { BaseController } from '../../base/base.controller';
import {
  CreateBlocoDto,
  UpdateBlocoDto,
} from '../../template-modelo-vistoria/dto/bloco.dto';
import { TelefonesEntity } from '../entity/telefones.entity';
import { TelefonesService } from '../service/telefones.service';

@Controller('telefones')
export class TelefonesController extends BaseController<TelefonesEntity> {
  constructor(protected readonly baseService: TelefonesService) {
    super(baseService);
  }
  @Post()
  async create(@Body() createDto: CreateBlocoDto): Promise<TelefonesEntity> {
    return super.create(createDto);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateDto: UpdateBlocoDto,
  ): Promise<TelefonesEntity> {
    return super.update(id, updateDto);
  }
}
