import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Inject,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../../guard/guard';
import { createError } from '../../base/util/responses.util';
import { QueryDto } from '../dto/CNPJ.dto';
import { IExternalService } from '../interfaces/externalService.interface';
import { BuscaCNPJService } from '../Service/info-simples/buscaCNPJ.service';

@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@ApiTags('Servicos externos')
@Controller('servico-externo')
export class ServicosExternosController {
  constructor(
    @Inject(BuscaCNPJService) private readonly service: IExternalService, // Injeta a implementação correta
  ) {}
  @Get()
  async buscaDadosCNPJ(@Query() query: QueryDto): Promise<string> {
    try {
      console.log(this.service);
      return this.service.fetchData(query);
    } catch (error) {
      throw new HttpException(
        createError(error),
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
