import { Controller } from '@nestjs/common';
import { BaseCrudController } from '../../base/baseCrud.controller';
import { BlocoEntity } from '../entity/bloco.entity';
import { BlocosService } from '../service/blocos.service';
import {
  CreateBlocoDto,
  UpdateBlocoDto,
} from '../dto/requests/requestsBloco.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Bloco do modelo')
@Controller('bloco')
export class BlocosController extends BaseCrudController<
  BlocoEntity,
  CreateBlocoDto,
  UpdateBlocoDto
> {
  constructor(protected readonly baseService: BlocosService) {
    super(baseService);
  }
}
