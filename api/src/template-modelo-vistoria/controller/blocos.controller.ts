import { Body, Controller, Param, Post, Put } from '@nestjs/common';
import { BaseCrudController } from '../../base/baseCrud.controller';
import { BlocoEntity } from '../entity/bloco.entity';
import { BlocosService } from '../service/blocos.service';
import { CreateBlocoDto, UpdateBlocoDto } from '../dto/bloco.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Bloco do modelo')
@Controller('bloco')
export class BlocosController extends BaseCrudController<BlocoEntity> {
  constructor(protected readonly baseService: BlocosService) {
    super(baseService);
  }
  @Post()
  async create(@Body() createDto: CreateBlocoDto): Promise<BlocoEntity> {
    return super.create(createDto);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateDto: UpdateBlocoDto,
  ): Promise<BlocoEntity> {
    return super.update(id, updateDto);
  }
}
