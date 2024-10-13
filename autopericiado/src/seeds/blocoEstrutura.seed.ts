import { DataSource } from 'typeorm';
import { CamposEntity } from '../template-modelo-vistoria/entity/campos.entity';
import { OpcoesCampoEntity } from '../template-modelo-vistoria/entity/opcoesCampo.entity';
import { TipoCampoEnum } from '../template-modelo-vistoria/enum/tipoCampo.enum';
import { BlocosEntity } from '../template-modelo-vistoria/entity/blocos.entity';
import { TipoBLocoEnum } from '../template-modelo-vistoria/enum/tipoBLoco.enum';
import { NivelRiscoEnum } from '../template-modelo-vistoria/enum/nivelRisco.enum';

export class BlocoEstruturaSeed {
  async run(dataSource: DataSource): Promise<void> {
    const blocoRepository = dataSource.getRepository(BlocosEntity);
    const campoRepository = dataSource.getRepository(CamposEntity);
    const opcaoCampoRepository = dataSource.getRepository(OpcoesCampoEntity);

    const blocos = [
      {
        nome: 'ESTRUTURA',
        tipo: TipoBLocoEnum.IMAGEM,
        fontAwesomeIcon: 'fa-car-burst',
      },
    ];

    const blocosCriados = await blocoRepository.save(blocos);

    const campos = [
      //estrutura
      {
        nome: 'LONGARINA DIANTEIRA DIREITA',
        alias: 'LONGARINA_DIANTEIRA_DIREITA',
        tipo: TipoCampoEnum.SELECT,
        bloco: blocosCriados[0],
      }, //0
      {
        nome: 'PAINEL DIANTEIRO SUPERIOR',
        alias: 'PAINEL_DIANTEIRO_SUPERIOR',
        tipo: TipoCampoEnum.SELECT,
        bloco: blocosCriados[0],
      }, //1
      {
        nome: 'PAINEL DIANTEIRO INFERIOR',
        alias: 'PAINEL_DIANTEIRO_INFERIOR',
        tipo: TipoCampoEnum.SELECT,
        bloco: blocosCriados[0],
      }, //2
      {
        nome: 'LONGARINA DIANTEIRA ESQUERDA',
        alias: 'LONGARINA_DIANTEIRA_ESQUERDA',
        tipo: TipoCampoEnum.SELECT,
        bloco: blocosCriados[0],
      }, //3
      {
        nome: 'SUPORTE CAIXA DE AR ESQUERDA',
        alias: 'SUPORTE_CAIXA_DE_AR_ESQUERDA',
        tipo: TipoCampoEnum.SELECT,
        bloco: blocosCriados[0],
      }, //4
      {
        nome: 'COLUNA “A” ESQUERDA',
        alias: 'COLUNA_A_ESQUERDA',
        tipo: TipoCampoEnum.SELECT,
        bloco: blocosCriados[0],
      }, //5
      {
        nome: 'COLUNA “B” ESQUERDA',
        alias: 'COLUNA_B_ESQUERDA',
        tipo: TipoCampoEnum.SELECT,
        bloco: blocosCriados[0],
      }, //7
      {
        nome: 'COLUNA “C” ESQUERDA',
        alias: 'COLUNA_C_ESQUERDA',
        tipo: TipoCampoEnum.SELECT,
        bloco: blocosCriados[0],
      }, //8
      {
        nome: 'LONGARINA TRASEIRA ESQUERDA',
        alias: 'LONGARINA_TRASEIRA_ESQUERDA',
        tipo: TipoCampoEnum.SELECT,
        bloco: blocosCriados[0],
      }, //9
      {
        nome: 'PAINEL TRASEIRO',
        alias: 'PAINEL_TRASEIRO',
        tipo: TipoCampoEnum.SELECT,
        bloco: blocosCriados[0],
      }, //10
      {
        nome: 'LONGARINA TRASEIRA DIREITA',
        alias: 'LONGARINA_TRASEIRA_DIREITA',
        tipo: TipoCampoEnum.SELECT,
        bloco: blocosCriados[0],
      }, //11
      {
        nome: 'COLUNA “C” DIREITA',
        alias: 'COLUNA_C_DIREITA',
        tipo: TipoCampoEnum.SELECT,
        bloco: blocosCriados[0],
      }, //12
      {
        nome: 'COLUNA “B” DIREITA',
        alias: 'COLUNA_B_DIREITA',
        tipo: TipoCampoEnum.SELECT,
        bloco: blocosCriados[0],
      }, //13
      {
        nome: 'COLUNA “A” DIREITA',
        alias: 'COLUNA_A_DIREITA',
        tipo: TipoCampoEnum.SELECT,
        bloco: blocosCriados[0],
      }, //14
      {
        nome: 'SUPORTE CAIXA DE AR DIREITA',
        alias: 'SUPORTE_CAIXA_DE_AR_DIREITA',
        tipo: TipoCampoEnum.SELECT,
        bloco: blocosCriados[0],
      }, //15
    ];

    const camposCriados = await campoRepository.save(campos);

    const opcoesEstrutura = camposCriados
      .map((campo, index) => {
        const opcoes = [
          {
            nome: 'ORIGINAL',
            alias: 'ORIGINAL',
            nivelRisco: NivelRiscoEnum.SUCESSO,
            campo: campo,
          },
          {
            nome: 'AMASSADO',
            alias: 'AMASSADO',
            nivelRisco: NivelRiscoEnum.AVISO,
            campo: campo,
          },
          {
            nome: 'REPARADO',
            alias: 'REPARADO',
            nivelRisco: NivelRiscoEnum.AVISO,
            campo: campo,
          },
          {
            nome: 'SUBSTITUÍDO',
            alias: 'SUBSTITUIDO',
            nivelRisco: NivelRiscoEnum.AVISO,
            campo: campo,
          },
          {
            nome: 'TRINCADO',
            alias: 'TRINCADO',
            nivelRisco: NivelRiscoEnum.ERRO,
            campo: campo,
          },
          {
            nome: 'SOLDA',
            alias: 'SOLDA',
            nivelRisco: NivelRiscoEnum.ERRO,
            campo: campo,
          },
          {
            nome: 'CORROSÃO',
            alias: 'CORROSAO',
            nivelRisco: NivelRiscoEnum.ERRO,
            campo: campo,
          },
        ];

        // Adiciona a opção FURAÇÃO GNV apenas aos campos de índice 9 e 11
        if (index === 9 || index === 11) {
          opcoes.push({
            nome: 'FURAÇÃO GNV',
            alias: 'FURACAO_GNV',
            nivelRisco: NivelRiscoEnum.AVISO,
            campo: campo,
          });
        }
        return opcoes;
      })
      .flat();

    // Salvar as opções no banco de dados
    await opcaoCampoRepository.save(opcoesEstrutura);
  }
}
