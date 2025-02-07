import { DataSource } from 'typeorm';
import { CamposEntity } from '../template-modelo-vistoria/entity/campos.entity';
import { TipoCampoEnum } from '../template-modelo-vistoria/enum/tipoCampo.enum';
import { BlocosEntity } from '../template-modelo-vistoria/entity/blocos.entity';
import { TipoBlocoEnum } from '../template-modelo-vistoria/enum/tipoBloco.enum';

export class BlocoAtualProprietarioSeed {
  async run(dataSource: DataSource): Promise<void> {
    const blocoRepository = dataSource.getRepository(BlocosEntity);
    const campoRepository = dataSource.getRepository(CamposEntity);

    const blocos = [
      {
        nome: 'ATUAL PROPRIETARIO',
        tipo: TipoBlocoEnum.PADRAO,
        fontAwesomeIcon: 'fa-user-tag',
      }, //0
    ];

    const blocosCriados = await blocoRepository.save(blocos);

    const campos = [
      { alias: 'TIPO_PESSOA', nome: 'TIPO DE PESSOA', tipo: TipoCampoEnum.SELECT, bloco: blocosCriados[0] },
      { alias: 'NOME_COMPLETO', nome: 'NOME COMPLETO', tipo: TipoCampoEnum.INPUT, bloco: blocosCriados[0] },
      { alias: 'CPF', nome: 'CPF', tipo: TipoCampoEnum.INPUT, bloco: blocosCriados[0] },
      { alias: 'RG', nome: 'RG', tipo: TipoCampoEnum.INPUT, bloco: blocosCriados[0] },
      { alias: 'RAZAO_SOCIAL', nome: 'RAZÃO SOCIAL', tipo: TipoCampoEnum.INPUT, bloco: blocosCriados[0] },
      { alias: 'NOME_FANTASIA', nome: 'NOME FANTASIA', tipo: TipoCampoEnum.INPUT, bloco: blocosCriados[0] },
      { alias: 'CNPJ', nome: 'CNPJ', tipo: TipoCampoEnum.INPUT, bloco: blocosCriados[0] },
      { alias: 'INSCRICAO_ESTADUAL', nome: 'INSCRIÇÃO ESTADUAL', tipo: TipoCampoEnum.INPUT, bloco: blocosCriados[0] },
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
