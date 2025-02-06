import { DataSource } from 'typeorm';
import { CamposEntity } from '../template-modelo-vistoria/entity/campos.entity';
import { OpcoesCampoEntity } from '../template-modelo-vistoria/entity/opcoesCampo.entity';
import { TipoCampoEnum } from '../template-modelo-vistoria/enum/tipoCampo.enum';
import { BlocosEntity } from '../template-modelo-vistoria/entity/blocos.entity';
import { TipoBlocoEnum } from '../template-modelo-vistoria/enum/tipoBloco.enum';
import { NivelRiscoEnum } from '../template-modelo-vistoria/enum/nivelRisco.enum';

export class BlocoPinturaSeed {
  async run(dataSource: DataSource): Promise<void> {
    const blocoRepository = dataSource.getRepository(BlocosEntity);
    const campoRepository = dataSource.getRepository(CamposEntity);
    const opcaoCampoRepository = dataSource.getRepository(OpcoesCampoEntity);

    const blocos = [
      {
        nome: 'PINTURA',
        tipo: TipoBlocoEnum.IMAGEM,
        fontAwesomeIcon: 'fa-paintbrush',
      },
    ];

    const blocosCriados = await blocoRepository.save(blocos);

    const campos = [
      //pintura
      {alias: 'CAPÔ',nome: 'CAPO',tipo: TipoCampoEnum.SELECT,bloco: blocosCriados[0],}, //0
      {alias: 'PARA-LAMA DIANTEIRO ESQUERDO',nome: 'PARA_LAMA_DIANTEIRO_ESQUERDO',tipo: TipoCampoEnum.SELECT,bloco: blocosCriados[0],}, //1
      {alias: 'COLUNA DIANTEIRA ESQUERDA',nome: 'COLUNA_DIANTEIRA_ESQUERDA',tipo: TipoCampoEnum.SELECT,bloco: blocosCriados[0],}, //2
      {alias: 'PORTA DIANTEIRA ESQUERDA',nome: 'PORTA_DIANTEIRA_ESQUERDA',tipo: TipoCampoEnum.SELECT,bloco: blocosCriados[0],}, //3
      {alias: 'PORTA TRASEIRA ESQUERDA',nome: 'PORTA_TRASEIRA_ESQUERDA',tipo: TipoCampoEnum.SELECT,bloco: blocosCriados[0],}, //4
      {alias: 'COLUNA TRASEIRA ESQUERDA',nome: 'COLUNA_TRASEIRA_ESQUERDA',tipo: TipoCampoEnum.SELECT,bloco: blocosCriados[0],}, //5
      {alias: 'LATERAL TRASEIRA ESQUERDO',nome: 'LATERAL_TRASEIRA_ESQUERDO',tipo: TipoCampoEnum.SELECT,bloco: blocosCriados[0],}, //6
      {alias: 'PORTA MALAS', nome: 'PORTA_MALAS', tipo: TipoCampoEnum.SELECT }, //11
      {alias: 'LATERAL TRASEIRA DIREITO',nome: 'LATERAL_TRASEIRA_DIREITO',tipo: TipoCampoEnum.SELECT,bloco: blocosCriados[0],}, //7
      {alias: 'COLUNA TRASEIRA DIREITA',nome: 'COLUNA_TRASEIRA_DIREITA',tipo: TipoCampoEnum.SELECT,bloco: blocosCriados[0],}, //8
      {alias: 'PORTA TRASEIRA DIREITA',nome: 'PORTA_TRASEIRA_DIREITA',tipo: TipoCampoEnum.SELECT,bloco: blocosCriados[0],}, //9
      {alias: 'PORTA DIANTEIRA DIREITA',nome: 'PORTA_DIANTEIRA_DIREITA',tipo: TipoCampoEnum.SELECT,bloco: blocosCriados[0],}, //10
      {alias: 'COLUNA DIANTEIRA DIREITA',nome: 'COLUNA_DIANTEIRA_DIREITA',tipo: TipoCampoEnum.SELECT,bloco: blocosCriados[0],}, //11
      {alias: 'PARA-LAMA DIANTEIRO DIREITO',nome: 'PARA_LAMA_DIANTEIRO_DIREITO',tipo: TipoCampoEnum.SELECT,bloco: blocosCriados[0],}, //12
      {alias: 'TETO',nome: 'TETO',tipo: TipoCampoEnum.SELECT,bloco: blocosCriados[0],}, //13
    ];

    const camposCriados = await campoRepository.save(campos);

    const opcoesPintura = camposCriados
      .map((campo) => [{  alias: 'PINTURA ORIGINAL',  nome: 'PINTURA_ORIGINAL',  nivelRisco: NivelRiscoEnum.SUCESSO,  campo: campo, },
        {  alias: 'REPINTURA',  nome: 'REPINTURA',  nivelRisco: NivelRiscoEnum.AVISO,  campo: campo,},
        {  alias: 'MASSA PLASTICA',  nome: 'REPINTURA_E_OU_MASSA_PLASTICA',  nivelRisco: NivelRiscoEnum.AVISO,  campo: campo, },
        {  alias: 'AMASSADO APARENTE',  nome: 'AMASSADO_APARENTE',  nivelRisco: NivelRiscoEnum.ERRO,  campo: campo,},
      ])
      .flat();

    // Salvar as opções no banco de dados
    await opcaoCampoRepository.save(opcoesPintura);
  }
}
