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
      { nome: 'N/I', campo: camposCriados[0] },
      { nome: 'PASSAGEIRO', campo: camposCriados[0] },
      { nome: 'CARGA', campo: camposCriados[0] },
      { nome: 'MISTO', campo: camposCriados[0] },
      { nome: 'CORRIDA', campo: camposCriados[0] },
      { nome: 'TRAÇÃO', campo: camposCriados[0] },
      { nome: 'ESPECIAL', campo: camposCriados[0] },
      { nome: 'COLEÇÃO', campo: camposCriados[0] },
    ];

    const opcoesCombustivel = [
      { nome: 'ÁLCOOL', campo: camposCriados[1] },
      { nome: 'GASOLINA', campo: camposCriados[1] },
      { nome: 'FLEX', campo: camposCriados[1] },
      { nome: 'DIESEL', campo: camposCriados[1] },
      { nome: 'ELÉTRICO', campo: camposCriados[1] },
      { nome: 'ÁLCOOL/GNC', campo: camposCriados[1] },
      { nome: 'ÁLCOOL/GNV', campo: camposCriados[1] },
      { nome: 'GASOLINA/ELÉTRICO', campo: camposCriados[1] },
      { nome: 'GASOLINA/GNC', campo: camposCriados[1] },
      { nome: 'GASOLINA/GNV', campo: camposCriados[1] },
      { nome: 'FLEX/GNV', campo: camposCriados[1] },
      { nome: 'DIESEL/GNC', campo: camposCriados[1] },
      { nome: 'DIESEL/GNV', campo: camposCriados[1] },
      { nome: 'GNV', campo: camposCriados[1] },
      { nome: 'BIODIESEL', campo: camposCriados[1] },
      { nome: 'GASOGÊNIO', campo: camposCriados[1] },
      { nome: 'GÁS METANO', campo: camposCriados[1] },
      { nome: 'BI-COMBUSTÍVEL', campo: camposCriados[1] },
      { nome: 'GÁS NATURAL', campo: camposCriados[1] },
      { nome: 'TRACIONADO', campo: camposCriados[1] },
      { nome: 'TETRA FUEL', campo: camposCriados[1] },
      { nome: 'BI-COMBUSTIVEL/GAS', campo: camposCriados[1] },
      { nome: 'ELÉTRICO FONTE INTERNA', campo: camposCriados[1] },
      { nome: 'ELÉTRICO FONTE EXTERNA', campo: camposCriados[1] },
      { nome: 'VIDE CAMPO OBSERVAÇÃO', campo: camposCriados[1] },
      { nome: 'NÃO IDENTIFICADO', campo: camposCriados[1] },
    ];
    const opcoesTipoVeiculo = [
      { nome: 'BICICLETA', campo: camposCriados[2] },
      { nome: 'CICLOMOTOR', campo: camposCriados[2] },
      { nome: 'MOTONETA', campo: camposCriados[2] },
      { nome: 'MOTOCICLETA', campo: camposCriados[2] },
      { nome: 'TRICICLO', campo: camposCriados[2] },
      { nome: 'AUTOMÓVEL', campo: camposCriados[2] },
      { nome: 'MICROÔNIBUS', campo: camposCriados[2] },
      { nome: 'ÔNIBUS', campo: camposCriados[2] },
      { nome: 'BONDE', campo: camposCriados[2] },
      { nome: 'REBOQUE', campo: camposCriados[2] },
      { nome: 'REBOCADOR', campo: camposCriados[2] },
      { nome: 'SEMI-REBOQUE', campo: camposCriados[2] },
      { nome: 'CHARRETE', campo: camposCriados[2] },
      { nome: 'CAMIONETA', campo: camposCriados[2] },
      { nome: 'CAMINHÃO', campo: camposCriados[2] },
      { nome: 'CARROÇA', campo: camposCriados[2] },
      { nome: 'TRATOR', campo: camposCriados[2] },
      { nome: 'CARRO DE MÃO', campo: camposCriados[2] },
      { nome: 'CAMINHÃO TRATOR', campo: camposCriados[2] },
      { nome: 'TRATOR DE RODAS', campo: camposCriados[2] },
      { nome: 'TRATOR DE ESTEIRAS', campo: camposCriados[2] },
      { nome: 'TRATOR MISTO', campo: camposCriados[2] },
      { nome: 'QUADRICICLO', campo: camposCriados[2] },
      { nome: 'CHASSI/PLATAFORMA', campo: camposCriados[2] },
      { nome: 'CAMINHONETE', campo: camposCriados[2] },
      { nome: 'SIDE-CAR', campo: camposCriados[2] },
      { nome: 'UTILITÁRIO', campo: camposCriados[2] },
      { nome: 'MOTOR CASA', campo: camposCriados[2] },
      { nome: 'FURGÃO', campo: camposCriados[2] },
      { nome: 'PASSEIO', campo: camposCriados[2] },
      { nome: 'ESPORTIVO', campo: camposCriados[2] },
      { nome: 'IMPLEMENTO', campo: camposCriados[2] },
      { nome: 'ESPECIAL', campo: camposCriados[2] },
      { nome: 'PICK-UP', campo: camposCriados[2] },
      { nome: 'PICK-UP PESADA', campo: camposCriados[2] },
    ];

    const opcoesCorVeiculo = [
      { nome: 'N/I', campo: camposCriados[3] },
      { nome: 'AMARELO', campo: camposCriados[3] },
      { nome: 'AZUL', campo: camposCriados[3] },
      { nome: 'BEGE', campo: camposCriados[3] },
      { nome: 'BRANCO', campo: camposCriados[3] },
      { nome: 'CINZA', campo: camposCriados[3] },
      { nome: 'DOURADO', campo: camposCriados[3] },
      { nome: 'FANTASIA', campo: camposCriados[3] },
      { nome: 'GELO', campo: camposCriados[3] },
      { nome: 'GRENA', campo: camposCriados[3] },
      { nome: 'LARANJA', campo: camposCriados[3] },
      { nome: 'MARROM', campo: camposCriados[3] },
      { nome: 'PÉROLA', campo: camposCriados[3] },
      { nome: 'PRATA', campo: camposCriados[3] },
      { nome: 'PRETO', campo: camposCriados[3] },
      { nome: 'ROSA', campo: camposCriados[3] },
      { nome: 'ROXO', campo: camposCriados[3] },
      { nome: 'VERDE', campo: camposCriados[3] },
      { nome: 'VERMELHO', campo: camposCriados[3] },
      { nome: 'VINHO', campo: camposCriados[3] },
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
