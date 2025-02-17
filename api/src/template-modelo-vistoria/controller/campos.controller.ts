import { Body, Controller, Param, Post, Put } from '@nestjs/common';
import { BaseCrudController } from '../../base/baseCrud.controller';
import { CampoEntity } from '../entity/campo.entity';
import { CamposService } from '../service/campos.service';
import { CreateCampoDto, UpdateCampoDto } from '../dto/campo.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Campos do bloco')
@Controller('campo')
export class CamposController extends BaseCrudController<CampoEntity> {
  constructor(protected readonly baseService: CamposService) {
    super(baseService);
  }
  @Post()
  async create(@Body() createDto: CreateCampoDto): Promise<CampoEntity> {
    return super.create(createDto);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateDto: UpdateCampoDto,
  ): Promise<CampoEntity> {
    return super.update(id, updateDto);
  }
}
