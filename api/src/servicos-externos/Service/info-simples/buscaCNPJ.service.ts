import { Injectable } from '@nestjs/common';
import { IExternalService } from '../../interfaces/externalService.interface';
import { ConfigService } from '@nestjs/config';
import { MockService } from '../../../comum/service/mock.service';
import { QueryDto } from '../../dto/CNPJ.dto';

@Injectable()
export class BuscaCNPJService implements IExternalService {
  private readonly apiUrl: string;
  private readonly mockPath = 'infoSimples/cnpj'
  constructor(
    private readonly configService: ConfigService,
    protected mock: MockService
  ) {
    this.apiUrl = '';//this.configService.get<string>('API_INFOSIMPLES_CNPJ');
  }

  async fetchData<T, R>(data: T ): Promise<R> {
    const dados = data as QueryDto
    if (this.configService.get<string>('APP_ENV')){
      return this.mock.readJsonFile(`${this.mockPath}/${dados?.cnpj}`);
    }
    const response = await fetch(this.apiUrl, {
      method: 'POST',
      headers: {'Content-Type': 'application/json',},
      body: JSON.stringify({
        "token":this.configService.get<string>('API_INFOSIMPLES_CNPJ_TOKEN'),
        "cnpj":dados?.cnpj,
        "mobile_sem_login": 1
      }),
    });

    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.statusText}`);
    }

    return (await response.json()) as R;
  }

  sendData<T, R>(data: T): Promise<R> {
    throw new Error('Not implemented');
  }

  hasError(): boolean {
    return false;
  }

}