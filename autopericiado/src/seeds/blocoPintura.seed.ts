import { DataSource } from 'typeorm';
import { CamposEntity } from '../template-modelo-vistoria/entity/campos.entity';
import { OpcoesCampoEntity } from '../template-modelo-vistoria/entity/opcoesCampo.entity';
import { TipoCampoEnum } from '../template-modelo-vistoria/enum/tipoCampo.enum';
import { BlocosEntity } from '../template-modelo-vistoria/entity/blocos.entity';
import { TipoBLocoEnum } from '../template-modelo-vistoria/enum/tipoBLoco.enum';
import { NivelRiscoEnum } from '../template-modelo-vistoria/enum/nivelRisco.enum';

export class BlocoPinturaSeed {
  async run(dataSource: DataSource): Promise<void> {
    const blocoRepository = dataSource.getRepository(BlocosEntity);
    const campoRepository = dataSource.getRepository(CamposEntity);
    const opcaoCampoRepository = dataSource.getRepository(OpcoesCampoEntity);

    const blocos = [
      {
        nome: 'PINTURA',
        tipo: TipoBLocoEnum.IMAGEM,
        fontAwesomeIcon: 'fa-paintbrush',
      },
    ];

    const blocosCriados = await blocoRepository.save(blocos);

    const campos = [
      //pintura
      {
        nome: 'CAPÔ',
        alias: 'CAPO',
        tipo: TipoCampoEnum.SELECT,
        bloco: blocosCriados[0],
      }, //0
      {
        nome: 'PARA-LAMA DIANTEIRO ESQUERDO',
        alias: 'PARA_LAMA_DIANTEIRO_ESQUERDO',
        tipo: TipoCampoEnum.SELECT,
        bloco: blocosCriados[0],
      }, //1
      {
        nome: 'COLUNA DIANTEIRA ESQUERDA',
        alias: 'COLUNA_DIANTEIRA_ESQUERDA',
        tipo: TipoCampoEnum.SELECT,
        bloco: blocosCriados[0],
      }, //2
      {
        nome: 'PORTA DIANTEIRA ESQUERDA',
        alias: 'PORTA_DIANTEIRA_ESQUERDA',
        tipo: TipoCampoEnum.SELECT,
        bloco: blocosCriados[0],
      }, //3
      {
        nome: 'PORTA TRASEIRA ESQUERDA',
        alias: 'PORTA_TRASEIRA_ESQUERDA',
        tipo: TipoCampoEnum.SELECT,
        bloco: blocosCriados[0],
      }, //4
      {
        nome: 'COLUNA TRASEIRA ESQUERDA',
        alias: 'COLUNA_TRASEIRA_ESQUERDA',
        tipo: TipoCampoEnum.SELECT,
        bloco: blocosCriados[0],
      }, //5
      {
        nome: 'LATERAL TRASEIRA ESQUERDO',
        alias: 'LATERAL_TRASEIRA_ESQUERDO',
        tipo: TipoCampoEnum.SELECT,
        bloco: blocosCriados[0],
      }, //6
      { nome: 'PORTA MALAS', alias: 'PORTA_MALAS', tipo: TipoCampoEnum.SELECT }, //11
      {
        nome: 'LATERAL TRASEIRA DIREITO',
        alias: 'LATERAL_TRASEIRA_DIREITO',
        tipo: TipoCampoEnum.SELECT,
        bloco: blocosCriados[0],
      }, //7
      {
        nome: 'COLUNA TRASEIRA DIREITA',
        alias: 'COLUNA_TRASEIRA_DIREITA',
        tipo: TipoCampoEnum.SELECT,
        bloco: blocosCriados[0],
      }, //8
      {
        nome: 'PORTA TRASEIRA DIREITA',
        alias: 'PORTA_TRASEIRA_DIREITA',
        tipo: TipoCampoEnum.SELECT,
        bloco: blocosCriados[0],
      }, //9
      {
        nome: 'PORTA DIANTEIRA DIREITA',
        alias: 'PORTA_DIANTEIRA_DIREITA',
        tipo: TipoCampoEnum.SELECT,
        bloco: blocosCriados[0],
      }, //10
      {
        nome: 'COLUNA DIANTEIRA DIREITA',
        alias: 'COLUNA_DIANTEIRA_DIREITA',
        tipo: TipoCampoEnum.SELECT,
        bloco: blocosCriados[0],
      }, //11
      {
        nome: 'PARA-LAMA DIANTEIRO DIREITO',
        alias: 'PARA_LAMA_DIANTEIRO_DIREITO',
        tipo: TipoCampoEnum.SELECT,
        bloco: blocosCriados[0],
      }, //12
      {
        nome: 'TETO',
        alias: 'TETO',
        tipo: TipoCampoEnum.SELECT,
        bloco: blocosCriados[0],
      }, //13
    ];

    const camposCriados = await campoRepository.save(campos);

    const opcoesPintura = camposCriados
      .map((campo) => [
        {
          nome: 'PINTURA ORIGINAL',
          alias: 'PINTURA_ORIGINAL',
          nivelRisco: NivelRiscoEnum.SUCESSO,
          campo: campo, // Associado ao campo iterado
        },
        {
          nome: 'REPINTURA',
          alias: 'REPINTURA',
          nivelRisco: NivelRiscoEnum.AVISO,
          campo: campo, // Associado ao campo iterado
        },
        {
          nome: 'MASSA PLASTICA',
          alias: 'REPINTURA_E_OU_MASSA_PLASTICA',
          nivelRisco: NivelRiscoEnum.AVISO,
          campo: campo, // Associado ao campo iterado
        },
        {
          nome: 'AMASSADO APARENTE',
          alias: 'AMASSADO_APARENTE',
          nivelRisco: NivelRiscoEnum.ERRO,
          campo: campo, // Associado ao campo iterado
        },
      ])
      .flat();

    // Salvar as opções no banco de dados
    await opcaoCampoRepository.save(opcoesPintura);
  }
}
