import { Body, Controller, Param, Post, Put } from '@nestjs/common';
import { BaseController } from '../../base/base.controller';
import { BlocosEntity } from '../entity/blocos.entity';
import { BlocosService } from '../service/blocos.service';
import { CreateBlocoDto, UpdateBlocoDto } from '../dto/bloco.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Bloco do modelo')
@Controller('bloco')
export class BlocosController extends BaseController<BlocosEntity> {
  constructor(protected readonly baseService: BlocosService) {
    super(baseService);
  }
  @Post()
  async create(@Body() createDto: CreateBlocoDto): Promise<BlocosEntity> {
    return super.create(createDto);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateDto: UpdateBlocoDto,
  ): Promise<BlocosEntity> {
    return super.update(id, updateDto);
  }
}
