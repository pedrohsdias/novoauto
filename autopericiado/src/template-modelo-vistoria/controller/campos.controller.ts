import { Body, Controller, Param, Post, Put } from '@nestjs/common';
import { BaseController } from '../../base/base.controller';
import { CamposEntity } from '../entity/campos.entity';
import { CamposService } from '../service/campos.service';
import { CreateCampoDto, UpdateCampoDto } from '../dto/campo.dto';

@Controller('campo')
export class CamposController extends BaseController<CamposEntity> {
  constructor(protected readonly baseService: CamposService) {
    super(baseService);
  }
  @Post()
  async create(@Body() createDto: CreateCampoDto): Promise<CamposEntity> {
    return super.create(createDto);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateDto: UpdateCampoDto,
  ): Promise<CamposEntity> {
    return super.update(id, updateDto);
  }
}
