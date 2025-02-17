import { Body, Controller, Param, Post, Put } from '@nestjs/common';
import { BaseCrudController } from '../../base/baseCrud.controller';
import {
  CreateBlocoDto,
  UpdateBlocoDto,
} from '../../template-modelo-vistoria/dto/bloco.dto';
import { EnderecoEntity } from '../entity/endereco.entity';
import { EnderecosService } from '../service/enderecos.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateEnderecoDto } from '../dto/createEndereco.dto';
@ApiTags('Endereco')
@Controller('enderecos')
export class EnderecosController extends BaseCrudController<EnderecoEntity> {
  constructor(protected readonly baseService: EnderecosService) {
    super(baseService);
  }
  @Post()
  async create(@Body() createDto: CreateEnderecoDto): Promise<EnderecoEntity> {
    return super.create(createDto);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateDto: UpdateBlocoDto,
  ): Promise<EnderecoEntity> {
    return super.update(id, updateDto);
  }
}
