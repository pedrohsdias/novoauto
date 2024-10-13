import { DataSource } from 'typeorm';
import { CamposEntity } from '../template-modelo-vistoria/entity/campos.entity';
import { OpcoesCampoEntity } from '../template-modelo-vistoria/entity/opcoesCampo.entity';
import { TipoCampoEnum } from '../template-modelo-vistoria/enum/tipoCampo.enum';
import { BlocosEntity } from '../template-modelo-vistoria/entity/blocos.entity';
import { TipoBLocoEnum } from '../template-modelo-vistoria/enum/tipoBLoco.enum';

export class BlocoDadosVeiculoSeed {
  async run(dataSource: DataSource): Promise<void> {
    const blocoRepository = dataSource.getRepository(BlocosEntity);
    const campoRepository = dataSource.getRepository(CamposEntity);
    const opcaoCampoRepository = dataSource.getRepository(OpcoesCampoEntity);

    const blocos = [
      {
        nome: 'DADOS DO VEICULO',
        tipo: TipoBLocoEnum.PADRAO,
        fontAwesomeIcon: 'fa-car-side',
      },
    ];

    const blocosCriados = await blocoRepository.save(blocos);

    const campos = [
      //dados veiculo
      {
        nome: 'ESPECIE VEICULO',
        alias: 'ESPECIE_VEICULO',
        tipo: TipoCampoEnum.SELECT,
        bloco: blocosCriados[0],
      }, //0
      {
        nome: 'TIPO COMBUSTIVEL',
        alias: 'TIPO_COMBUSTIVEL',
        tipo: TipoCampoEnum.SELECT,
        bloco: blocosCriados[0],
      }, //1
      {
        nome: 'TIPO VEICULO',
        alias: 'TIPO_VEICULO',
        tipo: TipoCampoEnum.SELECT,
        bloco: blocosCriados[0],
      }, //2
      {
        nome: 'COR VEICULO',
        alias: 'COR_VEICULO',
        tipo: TipoCampoEnum.SELECT,
        bloco: blocosCriados[0],
      }, //3
    ];

    const camposCriados = await campoRepository.save(campos);

    const opcoesEspecie = [
      { nome: 'N/I', alias: 'NI', campo: camposCriados[0] },
      { nome: 'PASSAGEIRO', alias: 'PASSAGEIRO', campo: camposCriados[0] },
      { nome: 'CARGA', alias: 'CARGA', campo: camposCriados[0] },
      { nome: 'MISTO', alias: 'MISTO', campo: camposCriados[0] },
      { nome: 'CORRIDA', alias: 'CORRIDA', campo: camposCriados[0] },
      { nome: 'TRAÇÃO', alias: 'TRACAO', campo: camposCriados[0] },
      { nome: 'ESPECIAL', alias: 'ESPECIAL', campo: camposCriados[0] },
      { nome: 'COLEÇÃO', alias: 'COLECAO', campo: camposCriados[0] },
    ];

    const opcoesCombustivel = [
      { nome: 'ÁLCOOL', alias: 'ALCOOL', campo: camposCriados[1] },
      { nome: 'GASOLINA', alias: 'GASOLINA', campo: camposCriados[1] },
      { nome: 'FLEX', alias: 'ALCOOL_GASOLINA', campo: camposCriados[1] },
      { nome: 'DIESEL', alias: 'DIESEL', campo: camposCriados[1] },
      { nome: 'ELÉTRICO', alias: 'ELETRICO', campo: camposCriados[1] },
      {
        nome: 'ÁLCOOL/GNC',
        alias: 'ALCOOL_GAS_NATURAL_COMBUSTIVEL',
        campo: camposCriados[1],
      },
      {
        nome: 'ÁLCOOL/GNV',
        alias: 'ALCOOL_GAS_NATURAL_VEICULAR',
        campo: camposCriados[1],
      },
      {
        nome: 'GASOLINA/ELÉTRICO',
        alias: 'GASOLINA_ELETRICO',
        campo: camposCriados[1],
      },
      {
        nome: 'GASOLINA/GNC',
        alias: 'GASOLINA_GAS_NATURAL_COMBUSTIVEL',
        campo: camposCriados[1],
      },
      {
        nome: 'GASOLINA/GNV',
        alias: 'GASOLINA_GAS_NATURAL_VEICULAR',
        campo: camposCriados[1],
      },
      {
        nome: 'FLEX/GNV',
        alias: 'GASOLINA_ALCOOL_GAS_NATURAL',
        campo: camposCriados[1],
      },
      {
        nome: 'DIESEL/GNC',
        alias: 'DIESEL_GAS_NATURAL_COMBUSTIVEL',
        campo: camposCriados[1],
      },
      {
        nome: 'DIESEL/GNV',
        alias: 'DIESEL_GAS_NATURAL_VEICULAR',
        campo: camposCriados[1],
      },
      { nome: 'GNV', alias: 'GAS_NATURAL_VEICULAR', campo: camposCriados[1] },
      { nome: 'BIODIESEL', alias: 'BIODIESEL', campo: camposCriados[1] },
      { nome: 'GASOGÊNIO', alias: 'GASOGENIO', campo: camposCriados[1] },
      { nome: 'GÁS METANO', alias: 'GAS_METANO', campo: camposCriados[1] },
      {
        nome: 'BI-COMBUSTÍVEL',
        alias: 'BI_COMBUSTIVEL',
        campo: camposCriados[1],
      },
      { nome: 'GÁS NATURAL', alias: 'GAS_NATURAL', campo: camposCriados[1] },
      { nome: 'TRACIONADO', alias: 'TRACIONADO', campo: camposCriados[1] },
      { nome: 'TETRA FUEL', alias: 'TETRA_FUEL', campo: camposCriados[1] },
      {
        nome: 'BI-COMBUSTIVEL/GAS',
        alias: 'BI_COMBUSTIVEL_GAS',
        campo: camposCriados[1],
      },
      {
        nome: 'ELÉTRICO FONTE INTERNA',
        alias: 'ELETRICO_FONTE_INTERNA',
        campo: camposCriados[1],
      },
      {
        nome: 'ELÉTRICO FONTE EXTERNA',
        alias: 'ELETRICO_FONTE_EXTERNA',
        campo: camposCriados[1],
      },
      {
        nome: 'VIDE CAMPO OBSERVAÇÃO',
        alias: 'VIDE_CAMPO_OBSERVACAO',
        campo: camposCriados[1],
      },
      { nome: 'NÃO IDENTIFICADO', alias: 'NI', campo: camposCriados[1] },
    ];
    const opcoesTipoVeiculo = [
      { nome: 'BICICLETA', alias: 'BICICLETA', campo: camposCriados[2] },
      { nome: 'CICLOMOTOR', alias: 'CICLOMOTOR', campo: camposCriados[2] },
      { nome: 'MOTONETA', alias: 'MOTONETA', campo: camposCriados[2] },
      { nome: 'MOTOCICLETA', alias: 'MOTOCICLETA', campo: camposCriados[2] },
      { nome: 'TRICICLO', alias: 'TRICICLO', campo: camposCriados[2] },
      { nome: 'AUTOMÓVEL', alias: 'AUTOMOVEL', campo: camposCriados[2] },
      { nome: 'MICROÔNIBUS', alias: 'MICROONIBUS', campo: camposCriados[2] },
      { nome: 'ÔNIBUS', alias: 'ONIBUS', campo: camposCriados[2] },
      { nome: 'BONDE', alias: 'BONDE', campo: camposCriados[2] },
      { nome: 'REBOQUE', alias: 'REBOQUE', campo: camposCriados[2] },
      { nome: 'REBOCADOR', alias: 'REBOCADOR', campo: camposCriados[2] },
      { nome: 'SEMI-REBOQUE', alias: 'SEMI_REBOQUE', campo: camposCriados[2] },
      { nome: 'CHARRETE', alias: 'CHARRETE', campo: camposCriados[2] },
      { nome: 'CAMIONETA', alias: 'CAMIONETA', campo: camposCriados[2] },
      { nome: 'CAMINHÃO', alias: 'CAMINHAO', campo: camposCriados[2] },
      { nome: 'CARROÇA', alias: 'CARROCA', campo: camposCriados[2] },
      { nome: 'TRATOR', alias: 'TRATOR', campo: camposCriados[2] },
      { nome: 'CARRO DE MÃO', alias: 'CARRO_DE_MAO', campo: camposCriados[2] },
      {
        nome: 'CAMINHÃO TRATOR',
        alias: 'CAMINHAO_TRATOR',
        campo: camposCriados[2],
      },
      {
        nome: 'TRATOR DE RODAS',
        alias: 'TRATOR_DE_RODAS',
        campo: camposCriados[2],
      },
      {
        nome: 'TRATOR DE ESTEIRAS',
        alias: 'TRATOR_DE_ESTEIRAS',
        campo: camposCriados[2],
      },
      { nome: 'TRATOR MISTO', alias: 'TRATOR_MISTO', campo: camposCriados[2] },
      { nome: 'QUADRICICLO', alias: 'QUADRICICLO', campo: camposCriados[2] },
      {
        nome: 'CHASSI/PLATAFORMA',
        alias: 'CHASSI_PLATAFORMA',
        campo: camposCriados[2],
      },
      { nome: 'CAMINHONETE', alias: 'CAMINHONETE', campo: camposCriados[2] },
      { nome: 'SIDE-CAR', alias: 'SIDE_CAR', campo: camposCriados[2] },
      { nome: 'UTILITÁRIO', alias: 'UTILITARIO', campo: camposCriados[2] },
      { nome: 'MOTOR CASA', alias: 'MOTOR_CASA', campo: camposCriados[2] },
      { nome: 'FURGÃO', alias: 'FURGAO', campo: camposCriados[2] },
      { nome: 'PASSEIO', alias: 'PASSEIO', campo: camposCriados[2] },
      { nome: 'ESPORTIVO', alias: 'ESPORTIVO', campo: camposCriados[2] },
      { nome: 'IMPLEMENTO', alias: 'IMPLEMENTO', campo: camposCriados[2] },
      { nome: 'ESPECIAL', alias: 'ESPECIAL', campo: camposCriados[2] },
      { nome: 'PICK-UP', alias: 'PICK_UP', campo: camposCriados[2] },
      {
        nome: 'PICK-UP PESADA',
        alias: 'PICK_UP_PESADA',
        campo: camposCriados[2],
      },
    ];

    const opcoesCorVeiculo = [
      { nome: 'N/I', alias: 'NI', campo: camposCriados[3] },
      { nome: 'AMARELO', alias: 'AMARELO', campo: camposCriados[3] },
      { nome: 'AZUL', alias: 'AZUL', campo: camposCriados[3] },
      { nome: 'BEGE', alias: 'BEGE', campo: camposCriados[3] },
      { nome: 'BRANCO', alias: 'BRANCO', campo: camposCriados[3] },
      { nome: 'CINZA', alias: 'CINZA', campo: camposCriados[3] },
      { nome: 'DOURADO', alias: 'DOURADO', campo: camposCriados[3] },
      { nome: 'FANTASIA', alias: 'FANTASIA', campo: camposCriados[3] },
      { nome: 'GELO', alias: 'GELO', campo: camposCriados[3] },
      { nome: 'GRENA', alias: 'GRENA', campo: camposCriados[3] },
      { nome: 'LARANJA', alias: 'LARANJA', campo: camposCriados[3] },
      { nome: 'MARROM', alias: 'MARROM', campo: camposCriados[3] },
      { nome: 'PÉROLA', alias: 'PEROLA', campo: camposCriados[3] },
      { nome: 'PRATA', alias: 'PRATA', campo: camposCriados[3] },
      { nome: 'PRETO', alias: 'PRETO', campo: camposCriados[3] },
      { nome: 'ROSA', alias: 'ROSA', campo: camposCriados[3] },
      { nome: 'ROXO', alias: 'ROXO', campo: camposCriados[3] },
      { nome: 'VERDE', alias: 'VERDE', campo: camposCriados[3] },
      { nome: 'VERMELHO', alias: 'VERMELHO', campo: camposCriados[3] },
      { nome: 'VINHO', alias: 'VINHO', campo: camposCriados[3] },
    ];

    // Salvar as opções no banco de dados
    await opcaoCampoRepository.save([
      ...opcoesEspecie,
      ...opcoesCombustivel,
      ...opcoesTipoVeiculo,
      ...opcoesCorVeiculo,
    ]);
  }
}
