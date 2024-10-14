import { Body, Controller, Param, Post, Put } from '@nestjs/common';
import { BaseController } from '../../base/base.controller';
import { FranquiadoresEntity } from '../entity/franquiadores.entity';
import { FranquiadoresService } from '../service/franquiadores.service';
import {
  CreateBlocoDto,
  UpdateBlocoDto,
} from '../../template-modelo-vistoria/dto/bloco.dto';

@Controller('franquiadores')
export class FranquiadoresController extends BaseController<FranquiadoresEntity> {
  constructor(protected readonly baseService: FranquiadoresService) {
    super(baseService);
  }
  @Post()
  async create(
    @Body() createDto: CreateBlocoDto,
  ): Promise<FranquiadoresEntity> {
    return super.create(createDto);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateDto: UpdateBlocoDto,
  ): Promise<FranquiadoresEntity> {
    return super.update(id, updateDto);
  }
}
