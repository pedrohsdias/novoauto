import { DataSource } from 'typeorm';
import { CampoEntity } from '../template-modelo-vistoria/entity/campo.entity';
import { TipoCampoEnum } from '../template-modelo-vistoria/enum/tipoCampo.enum';
import { BlocoEntity } from '../template-modelo-vistoria/entity/bloco.entity';
import { TipoBlocoEnum } from '../template-modelo-vistoria/enum/tipoBloco.enum';

export class BlocoCondutorSeed {
  async run(dataSource: DataSource): Promise<void> {
    const blocoRepository = dataSource.getRepository(BlocoEntity);
    const campoRepository = dataSource.getRepository(CampoEntity);

    const blocos = [
      {
        nome: 'CONDUTOR',
        tipo: TipoBlocoEnum.PADRAO,
        fontAwesomeIcon: 'fa-id-card',
      }, //0
    ];

    const blocosCriados = await blocoRepository.save(blocos);

    const campos = [
      { alias: 'NOME_COMPLETO', nome: 'NOME COMPLETO', tipo: TipoCampoEnum.INPUT, bloco: blocosCriados[0] },
      { alias: 'EMAIL', nome: 'E-MAIL', tipo: TipoCampoEnum.INPUT_EMAIL, bloco: blocosCriados[0] },
      { alias: 'CPF', nome: 'CPF', tipo: TipoCampoEnum.INPUT, bloco: blocosCriados[0] },
      { alias: 'CNH', nome: 'CNH', tipo: TipoCampoEnum.INPUT, bloco: blocosCriados[0] },
      { alias: 'RG', nome: 'RG', tipo: TipoCampoEnum.INPUT, bloco: blocosCriados[0] },
      { alias: 'TELEFONE', nome: 'TELEFONE', tipo: TipoCampoEnum.INPUT, bloco: blocosCriados[0] },
      { alias: 'CELULAR', nome: 'CELULAR', tipo: TipoCampoEnum.INPUT, bloco: blocosCriados[0] },
    ];
    await campoRepository.save(campos);
  }
}
