import { Controller } from '@nestjs/common';
import { BaseCrudController } from '../../base/baseCrud.controller';
import { ServicoEntity } from '../entity/servico.entity';
import { ServicosService } from '../service/servicos.service';
import { ApiTags } from '@nestjs/swagger';
import {
  CreateServicoDto,
  UpdateServicoDto,
} from '../dto/requests/requestsServico.dto';

@ApiTags('Serviço')
@Controller('servicos')
export class ServicosController extends BaseCrudController<
  ServicoEntity,
  CreateServicoDto,
  UpdateServicoDto
> {
  constructor(protected readonly baseService: ServicosService) {
    super(baseService);
  }
}
