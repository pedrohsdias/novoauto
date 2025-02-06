import { DataSource } from 'typeorm';
import { CamposEntity } from '../template-modelo-vistoria/entity/campos.entity';
import { TipoCampoEnum } from '../template-modelo-vistoria/enum/tipoCampo.enum';
import { BlocosEntity } from '../template-modelo-vistoria/entity/blocos.entity';
import { TipoBlocoEnum } from '../template-modelo-vistoria/enum/tipoBloco.enum';

export class BlocoValoresSolicitanteSeed {
  async run(dataSource: DataSource): Promise<void> {
    const blocoRepository = dataSource.getRepository(BlocosEntity);
    const campoRepository = dataSource.getRepository(CamposEntity);

    const blocos = [
      {
        nome: 'SOLICITANTE',
        tipo: TipoBlocoEnum.PADRAO,
        fontAwesomeIcon: 'fa-comments-dollar',
      }, //0
    ];

    const blocosCriados = await blocoRepository.save(blocos);

    const campos = [
      {
        alias: 'NOME',
        nome: 'NOME',
        tipo: TipoCampoEnum.INPUT,
        bloco: blocosCriados[0],
      },
      {
        alias: 'EMAIL',
        nome: 'E-MAIL',
        tipo: TipoCampoEnum.INPUT_EMAIL,
        bloco: blocosCriados[0],
      },
      {
        alias: 'TELEFONE',
        nome: 'TELEFONE',
        tipo: TipoCampoEnum.INPUT,
        bloco: blocosCriados[0],
      },
      {
        alias: 'CELULAR',
        nome: 'CELULAR',
        tipo: TipoCampoEnum.INPUT,
        bloco: blocosCriados[0],
      },
      {
        alias: 'CORRETORA',
        nome: 'CORRETORA',
        tipo: TipoCampoEnum.INPUT,
        bloco: blocosCriados[0],
      },
      {
        alias: 'SUSEP',
        nome: 'SUSEP',
        tipo: TipoCampoEnum.INPUT,
        bloco: blocosCriados[0],
      },
    ];
    await campoRepository.save(campos);
  }
}
