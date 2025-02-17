import { DataSource } from 'typeorm';
import { CampoEntity } from '../template-modelo-vistoria/entity/campo.entity';
import { OpcaoCampoEntity } from '../template-modelo-vistoria/entity/opcaoCampo.entity';
import { TipoCampoEnum } from '../template-modelo-vistoria/enum/tipoCampo.enum';
import { BlocoEntity } from '../template-modelo-vistoria/entity/bloco.entity';
import { TipoBlocoEnum } from '../template-modelo-vistoria/enum/tipoBloco.enum';
import { NivelRiscoEnum } from '../template-modelo-vistoria/enum/nivelRisco.enum';

export class BlocoEstruturaSeed {
  async run(dataSource: DataSource): Promise<void> {
    const blocoRepository = dataSource.getRepository(BlocoEntity);
    const campoRepository = dataSource.getRepository(CampoEntity);
    const opcaoCampoRepository = dataSource.getRepository(OpcaoCampoEntity);

    const blocos = [
      {
        nome: 'ESTRUTURA', tipo: TipoBlocoEnum.IMAGEM,
        fontAwesomeIcon: 'fa-car-burst',
      },
    ];

    const blocosCriados = await blocoRepository.save(blocos);

    const campos = [
      //estrutura
      {alias: 'LONGARINA DIANTEIRA DIREITA', nome: 'LONGARINA_DIANTEIRA_DIREITA', tipo: TipoCampoEnum.SELECT, bloco: blocosCriados[0],}, //0
      {alias: 'PAINEL DIANTEIRO SUPERIOR', nome: 'PAINEL_DIANTEIRO_SUPERIOR', tipo: TipoCampoEnum.SELECT, bloco: blocosCriados[0],}, //1
      {alias: 'PAINEL DIANTEIRO INFERIOR', nome: 'PAINEL_DIANTEIRO_INFERIOR', tipo: TipoCampoEnum.SELECT, bloco: blocosCriados[0],}, //2
      {alias: 'LONGARINA DIANTEIRA ESQUERDA', nome: 'LONGARINA_DIANTEIRA_ESQUERDA', tipo: TipoCampoEnum.SELECT, bloco: blocosCriados[0],}, //3
      {alias: 'SUPORTE CAIXA DE AR ESQUERDA', nome: 'SUPORTE_CAIXA_DE_AR_ESQUERDA', tipo: TipoCampoEnum.SELECT, bloco: blocosCriados[0],}, //4
      {alias: 'COLUNA “A” ESQUERDA', nome: 'COLUNA_A_ESQUERDA', tipo: TipoCampoEnum.SELECT, bloco: blocosCriados[0],}, //5
      {alias: 'COLUNA “B” ESQUERDA', nome: 'COLUNA_B_ESQUERDA', tipo: TipoCampoEnum.SELECT, bloco: blocosCriados[0],}, //7
      {alias: 'COLUNA “C” ESQUERDA', nome: 'COLUNA_C_ESQUERDA', tipo: TipoCampoEnum.SELECT, bloco: blocosCriados[0],}, //8
      {alias: 'LONGARINA TRASEIRA ESQUERDA', nome: 'LONGARINA_TRASEIRA_ESQUERDA', tipo: TipoCampoEnum.SELECT, bloco: blocosCriados[0],}, //9
      {alias: 'PAINEL TRASEIRO', nome: 'PAINEL_TRASEIRO', tipo: TipoCampoEnum.SELECT, bloco: blocosCriados[0],}, //10
      {alias: 'LONGARINA TRASEIRA DIREITA', nome: 'LONGARINA_TRASEIRA_DIREITA', tipo: TipoCampoEnum.SELECT, bloco: blocosCriados[0],}, //11
      {alias: 'COLUNA “C” DIREITA', nome: 'COLUNA_C_DIREITA', tipo: TipoCampoEnum.SELECT, bloco: blocosCriados[0],}, //12
      {alias: 'COLUNA “B” DIREITA', nome: 'COLUNA_B_DIREITA', tipo: TipoCampoEnum.SELECT, bloco: blocosCriados[0],}, //13
      {alias: 'COLUNA “A” DIREITA', nome: 'COLUNA_A_DIREITA', tipo: TipoCampoEnum.SELECT, bloco: blocosCriados[0],}, //14
      {alias: 'SUPORTE CAIXA DE AR DIREITA', nome: 'SUPORTE_CAIXA_DE_AR_DIREITA', tipo: TipoCampoEnum.SELECT, bloco: blocosCriados[0],}, //15
    ];

    const camposCriados = await campoRepository.save(campos);

    const opcoesEstrutura = camposCriados
      .map((campo, index) => {
        const opcoes = [
          { alias: 'ORIGINAL', nome: 'ORIGINAL', nivelRisco: NivelRiscoEnum.SUCESSO, campo: campo,},
          { alias: 'AMASSADO', nome: 'AMASSADO', nivelRisco: NivelRiscoEnum.AVISO, campo: campo,},
          { alias: 'REPARADO', nome: 'REPARADO', nivelRisco: NivelRiscoEnum.AVISO, campo: campo,},
          { alias: 'SUBSTITUÍDO', nome: 'SUBSTITUIDO', nivelRisco: NivelRiscoEnum.AVISO, campo: campo,},
          { alias: 'TRINCADO', nome: 'TRINCADO', nivelRisco: NivelRiscoEnum.ERRO, campo: campo,},
          { alias: 'SOLDA', nome: 'SOLDA', nivelRisco: NivelRiscoEnum.ERRO, campo: campo,},
          { alias: 'CORROSÃO', nome: 'CORROSAO', nivelRisco: NivelRiscoEnum.ERRO, campo: campo,},
        ];

        // Adiciona a opção FURAÇÃO GNV apenas aos campos de índice 9 e 11
        if (index === 9 || index === 11) {
          opcoes.push({ alias: 'FURAÇÃO GNV', nome: 'FURACAO_GNV', nivelRisco: NivelRiscoEnum.AVISO, campo: campo,});
        }
        return opcoes;
      })
      .flat();

    // Salvar as opções no banco de dados
    await opcaoCampoRepository.save(opcoesEstrutura);
  }
}
