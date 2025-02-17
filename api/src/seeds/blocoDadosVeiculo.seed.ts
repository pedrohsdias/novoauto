import { DataSource } from 'typeorm';
import { CampoEntity } from '../template-modelo-vistoria/entity/campo.entity';
import { OpcaoCampoEntity } from '../template-modelo-vistoria/entity/opcaoCampo.entity';
import { TipoCampoEnum } from '../template-modelo-vistoria/enum/tipoCampo.enum';
import { BlocoEntity } from '../template-modelo-vistoria/entity/bloco.entity';
import { TipoBlocoEnum } from '../template-modelo-vistoria/enum/tipoBloco.enum';

export class BlocoDadosVeiculoSeed {
  async run(dataSource: DataSource): Promise<void> {
    const blocoRepository = dataSource.getRepository(BlocoEntity);
    const campoRepository = dataSource.getRepository(CampoEntity);
    const opcaoCampoRepository = dataSource.getRepository(OpcaoCampoEntity);

    const blocos = [
      {
        nome: 'DADOS DO VEICULO',
        tipo: TipoBlocoEnum.PADRAO,
        fontAwesomeIcon: 'fa-car-side',
      },
    ];

    const blocosCriados = await blocoRepository.save(blocos);

    const campos = [
      //dados veiculo
      {
        alias: 'ESPECIE VEICULO',
        nome: 'ESPECIE_VEICULO',
        tipo: TipoCampoEnum.SELECT,
        bloco: blocosCriados[0],
      }, //0
      {
        alias: 'TIPO COMBUSTIVEL',
        nome: 'TIPO_COMBUSTIVEL',
        tipo: TipoCampoEnum.SELECT,
        bloco: blocosCriados[0],
      }, //1
      {
        alias: 'TIPO VEICULO',
        nome: 'TIPO_VEICULO',
        tipo: TipoCampoEnum.SELECT,
        bloco: blocosCriados[0],
      }, //2
      {
        alias: 'COR VEICULO',
        nome: 'COR_VEICULO',
        tipo: TipoCampoEnum.SELECT,
        bloco: blocosCriados[0],
      }, //3
    ];

    const camposCriados = await campoRepository.save(campos);

    const opcoesEspecie = [
      { alias: 'N/I', nome: 'NI', campo: camposCriados[0] },
      { alias: 'PASSAGEIRO', nome: 'PASSAGEIRO', campo: camposCriados[0] },
      { alias: 'CARGA', nome: 'CARGA', campo: camposCriados[0] },
      { alias: 'MISTO', nome: 'MISTO', campo: camposCriados[0] },
      { alias: 'CORRIDA', nome: 'CORRIDA', campo: camposCriados[0] },
      { alias: 'TRAÇÃO', nome: 'TRACAO', campo: camposCriados[0] },
      { alias: 'ESPECIAL', nome: 'ESPECIAL', campo: camposCriados[0] },
      { alias: 'COLEÇÃO', nome: 'COLECAO', campo: camposCriados[0] },
    ];

    const opcoesCombustivel = [
      { alias: 'ÁLCOOL', nome: 'ALCOOL', campo: camposCriados[1] },
      { alias: 'GASOLINA', nome: 'GASOLINA', campo: camposCriados[1] },
      { alias: 'FLEX', nome: 'ALCOOL_GASOLINA', campo: camposCriados[1] },
      { alias: 'DIESEL', nome: 'DIESEL', campo: camposCriados[1] },
      { alias: 'ELÉTRICO', nome: 'ELETRICO', campo: camposCriados[1] },
      {
        alias: 'ÁLCOOL/GNC',
        nome: 'ALCOOL_GAS_NATURAL_COMBUSTIVEL',
        campo: camposCriados[1],
      },
      {
        alias: 'ÁLCOOL/GNV',
        nome: 'ALCOOL_GAS_NATURAL_VEICULAR',
        campo: camposCriados[1],
      },
      {
        alias: 'GASOLINA/ELÉTRICO',
        nome: 'GASOLINA_ELETRICO',
        campo: camposCriados[1],
      },
      {
        alias: 'GASOLINA/GNC',
        nome: 'GASOLINA_GAS_NATURAL_COMBUSTIVEL',
        campo: camposCriados[1],
      },
      {
        alias: 'GASOLINA/GNV',
        nome: 'GASOLINA_GAS_NATURAL_VEICULAR',
        campo: camposCriados[1],
      },
      {
        alias: 'FLEX/GNV',
        nome: 'GASOLINA_ALCOOL_GAS_NATURAL',
        campo: camposCriados[1],
      },
      {
        alias: 'DIESEL/GNC',
        nome: 'DIESEL_GAS_NATURAL_COMBUSTIVEL',
        campo: camposCriados[1],
      },
      {
        alias: 'DIESEL/GNV',
        nome: 'DIESEL_GAS_NATURAL_VEICULAR',
        campo: camposCriados[1],
      },
      { alias: 'GNV', nome: 'GAS_NATURAL_VEICULAR', campo: camposCriados[1] },
      { alias: 'BIODIESEL', nome: 'BIODIESEL', campo: camposCriados[1] },
      { alias: 'GASOGÊNIO', nome: 'GASOGENIO', campo: camposCriados[1] },
      { alias: 'GÁS METANO', nome: 'GAS_METANO', campo: camposCriados[1] },
      {
        alias: 'BI-COMBUSTÍVEL',
        nome: 'BI_COMBUSTIVEL',
        campo: camposCriados[1],
      },
      { alias: 'GÁS NATURAL', nome: 'GAS_NATURAL', campo: camposCriados[1] },
      { alias: 'TRACIONADO', nome: 'TRACIONADO', campo: camposCriados[1] },
      { alias: 'TETRA FUEL', nome: 'TETRA_FUEL', campo: camposCriados[1] },
      {
        alias: 'BI-COMBUSTIVEL/GAS',
        nome: 'BI_COMBUSTIVEL_GAS',
        campo: camposCriados[1],
      },
      {
        alias: 'ELÉTRICO FONTE INTERNA',
        nome: 'ELETRICO_FONTE_INTERNA',
        campo: camposCriados[1],
      },
      {
        alias: 'ELÉTRICO FONTE EXTERNA',
        nome: 'ELETRICO_FONTE_EXTERNA',
        campo: camposCriados[1],
      },
      {
        alias: 'VIDE CAMPO OBSERVAÇÃO',
        nome: 'VIDE_CAMPO_OBSERVACAO',
        campo: camposCriados[1],
      },
      { alias: 'NÃO IDENTIFICADO', nome: 'NI', campo: camposCriados[1] },
    ];
    const opcoesTipoVeiculo = [
      { alias: 'BICICLETA', nome: 'BICICLETA', campo: camposCriados[2] },
      { alias: 'CICLOMOTOR', nome: 'CICLOMOTOR', campo: camposCriados[2] },
      { alias: 'MOTONETA', nome: 'MOTONETA', campo: camposCriados[2] },
      { alias: 'MOTOCICLETA', nome: 'MOTOCICLETA', campo: camposCriados[2] },
      { alias: 'TRICICLO', nome: 'TRICICLO', campo: camposCriados[2] },
      { alias: 'AUTOMÓVEL', nome: 'AUTOMOVEL', campo: camposCriados[2] },
      { alias: 'MICROÔNIBUS', nome: 'MICROONIBUS', campo: camposCriados[2] },
      { alias: 'ÔNIBUS', nome: 'ONIBUS', campo: camposCriados[2] },
      { alias: 'BONDE', nome: 'BONDE', campo: camposCriados[2] },
      { alias: 'REBOQUE', nome: 'REBOQUE', campo: camposCriados[2] },
      { alias: 'REBOCADOR', nome: 'REBOCADOR', campo: camposCriados[2] },
      { alias: 'SEMI-REBOQUE', nome: 'SEMI_REBOQUE', campo: camposCriados[2] },
      { alias: 'CHARRETE', nome: 'CHARRETE', campo: camposCriados[2] },
      { alias: 'CAMIONETA', nome: 'CAMIONETA', campo: camposCriados[2] },
      { alias: 'CAMINHÃO', nome: 'CAMINHAO', campo: camposCriados[2] },
      { alias: 'CARROÇA', nome: 'CARROCA', campo: camposCriados[2] },
      { alias: 'TRATOR', nome: 'TRATOR', campo: camposCriados[2] },
      { alias: 'CARRO DE MÃO', nome: 'CARRO_DE_MAO', campo: camposCriados[2] },
      {
        alias: 'CAMINHÃO TRATOR',
        nome: 'CAMINHAO_TRATOR',
        campo: camposCriados[2],
      },
      {
        alias: 'TRATOR DE RODAS',
        nome: 'TRATOR_DE_RODAS',
        campo: camposCriados[2],
      },
      {
        alias: 'TRATOR DE ESTEIRAS',
        nome: 'TRATOR_DE_ESTEIRAS',
        campo: camposCriados[2],
      },
      { alias: 'TRATOR MISTO', nome: 'TRATOR_MISTO', campo: camposCriados[2] },
      { alias: 'QUADRICICLO', nome: 'QUADRICICLO', campo: camposCriados[2] },
      {
        alias: 'CHASSI/PLATAFORMA',
        nome: 'CHASSI_PLATAFORMA',
        campo: camposCriados[2],
      },
      { alias: 'CAMINHONETE', nome: 'CAMINHONETE', campo: camposCriados[2] },
      { alias: 'SIDE-CAR', nome: 'SIDE_CAR', campo: camposCriados[2] },
      { alias: 'UTILITÁRIO', nome: 'UTILITARIO', campo: camposCriados[2] },
      { alias: 'MOTOR CASA', nome: 'MOTOR_CASA', campo: camposCriados[2] },
      { alias: 'FURGÃO', nome: 'FURGAO', campo: camposCriados[2] },
      { alias: 'PASSEIO', nome: 'PASSEIO', campo: camposCriados[2] },
      { alias: 'ESPORTIVO', nome: 'ESPORTIVO', campo: camposCriados[2] },
      { alias: 'IMPLEMENTO', nome: 'IMPLEMENTO', campo: camposCriados[2] },
      { alias: 'ESPECIAL', nome: 'ESPECIAL', campo: camposCriados[2] },
      { alias: 'PICK-UP', nome: 'PICK_UP', campo: camposCriados[2] },
      {
        alias: 'PICK-UP PESADA',
        nome: 'PICK_UP_PESADA',
        campo: camposCriados[2],
      },
    ];

    const opcoesCorVeiculo = [
      { alias: 'N/I', nome: 'NI', campo: camposCriados[3] },
      { alias: 'AMARELO', nome: 'AMARELO', campo: camposCriados[3] },
      { alias: 'AZUL', nome: 'AZUL', campo: camposCriados[3] },
      { alias: 'BEGE', nome: 'BEGE', campo: camposCriados[3] },
      { alias: 'BRANCO', nome: 'BRANCO', campo: camposCriados[3] },
      { alias: 'CINZA', nome: 'CINZA', campo: camposCriados[3] },
      { alias: 'DOURADO', nome: 'DOURADO', campo: camposCriados[3] },
      { alias: 'FANTASIA', nome: 'FANTASIA', campo: camposCriados[3] },
      { alias: 'GELO', nome: 'GELO', campo: camposCriados[3] },
      { alias: 'GRENA', nome: 'GRENA', campo: camposCriados[3] },
      { alias: 'LARANJA', nome: 'LARANJA', campo: camposCriados[3] },
      { alias: 'MARROM', nome: 'MARROM', campo: camposCriados[3] },
      { alias: 'PÉROLA', nome: 'PEROLA', campo: camposCriados[3] },
      { alias: 'PRATA', nome: 'PRATA', campo: camposCriados[3] },
      { alias: 'PRETO', nome: 'PRETO', campo: camposCriados[3] },
      { alias: 'ROSA', nome: 'ROSA', campo: camposCriados[3] },
      { alias: 'ROXO', nome: 'ROXO', campo: camposCriados[3] },
      { alias: 'VERDE', nome: 'VERDE', campo: camposCriados[3] },
      { alias: 'VERMELHO', nome: 'VERMELHO', campo: camposCriados[3] },
      { alias: 'VINHO', nome: 'VINHO', campo: camposCriados[3] },
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
