import { Body, Controller, Param, Post, Put } from '@nestjs/common';
import { BaseController } from '../../base/base.controller';
import { Blocos } from '../entity/blocos.entity';
import { BlocosService } from '../service/blocos.service';
import { CreateBlocoDto, UpdateBlocoDto } from '../dto/bloco.dto';

@Controller('bloco')
export class BlocosController extends BaseController<Blocos> {
  constructor(protected readonly baseService: BlocosService) {
    super(baseService);
  }
  @Post()
  async create(@Body() createDto: CreateBlocoDto): Promise<Blocos> {
    return super.create(createDto);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateDto: UpdateBlocoDto,
  ): Promise<Blocos> {
    return super.update(id, updateDto);
  }
}
