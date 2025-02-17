import { DataSource } from 'typeorm';
import { CampoEntity } from '../template-modelo-vistoria/entity/campo.entity';
import { TipoCampoEnum } from '../template-modelo-vistoria/enum/tipoCampo.enum';
import { BlocoEntity } from '../template-modelo-vistoria/entity/bloco.entity';
import { TipoBlocoEnum } from '../template-modelo-vistoria/enum/tipoBloco.enum';

export class BlocoProponenteSeed {
  async run(dataSource: DataSource): Promise<void> {
    const blocoRepository = dataSource.getRepository(BlocoEntity);
    const campoRepository = dataSource.getRepository(CampoEntity);

    const blocos = [
      {
        nome: 'PROPONENTE',
        tipo: TipoBlocoEnum.PADRAO,
        fontAwesomeIcon: 'fa-user',
      }, //0
    ];

    const blocosCriados = await blocoRepository.save(blocos);

    const campos = [
      { alias: 'TIPO_PESSOA', nome: 'TIPO DE PESSOA', tipo: TipoCampoEnum.SELECT, bloco: blocosCriados[0] },
      { alias: 'NOME', nome: 'NOME', tipo: TipoCampoEnum.INPUT, bloco: blocosCriados[0] },
      { alias: 'CPF', nome: 'CPF', tipo: TipoCampoEnum.INPUT, bloco: blocosCriados[0] },
      { alias: 'RG', nome: 'RG', tipo: TipoCampoEnum.INPUT, bloco: blocosCriados[0] },
      { alias: 'RAZAO_SOCIAL', nome: 'RAZÃO SOCIAL', tipo: TipoCampoEnum.INPUT, bloco: blocosCriados[0] },
      { alias: 'NOME_FANTASIA', nome: 'NOME FANTASIA', tipo: TipoCampoEnum.INPUT, bloco: blocosCriados[0] },
      { alias: 'CNPJ', nome: 'CNPJ', tipo: TipoCampoEnum.INPUT, bloco: blocosCriados[0] },
      { alias: 'INSCRICAO_ESTADUAL', nome: 'INSCRIÇÃO ESTADUAL', tipo: TipoCampoEnum.INPUT, bloco: blocosCriados[0] },
      { alias: 'EMAIL', nome: 'E-MAIL', tipo: TipoCampoEnum.INPUT_EMAIL, bloco: blocosCriados[0] },
      { alias: 'TELEFONE', nome: 'TELEFONE', tipo: TipoCampoEnum.INPUT, bloco: blocosCriados[0] },
      { alias: 'CELULAR', nome: 'CELULAR', tipo: TipoCampoEnum.INPUT, bloco: blocosCriados[0] },
      { alias: 'CEP', nome: 'CEP', tipo: TipoCampoEnum.INPUT, bloco: blocosCriados[0] },
      { alias: 'TIPO_ENDERECO', nome: 'TIPO DE ENDEREÇO', tipo: TipoCampoEnum.SELECT, bloco: blocosCriados[0] },
      { alias: 'TIPO_LOGRADOURO', nome: 'TIPO DE LOGRADOURO', tipo: TipoCampoEnum.SELECT, bloco: blocosCriados[0] },
      { alias: 'ENDERECO', nome: 'ENDEREÇO', tipo: TipoCampoEnum.INPUT, bloco: blocosCriados[0] },
      { alias: 'NUMERO', nome: 'NÚMERO', tipo: TipoCampoEnum.INPUT, bloco: blocosCriados[0] },
      { alias: 'COMPLEMENTO', nome: 'COMPLEMENTO', tipo: TipoCampoEnum.INPUT, bloco: blocosCriados[0] },
      { alias: 'BAIRRO', nome: 'BAIRRO', tipo: TipoCampoEnum.INPUT, bloco: blocosCriados[0] },
      { alias: 'CIDADE', nome: 'CIDADE', tipo: TipoCampoEnum.INPUT, bloco: blocosCriados[0] },
    ];
    await campoRepository.save(campos);
  }
}
