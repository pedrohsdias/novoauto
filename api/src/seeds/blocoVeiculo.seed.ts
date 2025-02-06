import { DataSource } from 'typeorm';
import { CamposEntity } from '../template-modelo-vistoria/entity/campos.entity';
import { TipoCampoEnum } from '../template-modelo-vistoria/enum/tipoCampo.enum';
import { BlocosEntity } from '../template-modelo-vistoria/entity/blocos.entity';
import { TipoBlocoEnum } from '../template-modelo-vistoria/enum/tipoBloco.enum';

export class BlocoVeiculoSeed {
  async run(dataSource: DataSource): Promise<void> {
    const blocoRepository = dataSource.getRepository(BlocosEntity);
    const campoRepository = dataSource.getRepository(CamposEntity);

    const blocos = [
      {
        nome: 'VEICULO',
        tipo: TipoBlocoEnum.PADRAO,
        fontAwesomeIcon: 'fa-car',
      }, //0
    ];

    const blocosCriados = await blocoRepository.save(blocos);

    const campos = [
      { alias: 'TAG_VEICULO', nome: 'TAG/IDENTIFICAÇÃO', tipo: TipoCampoEnum.INPUT, bloco: blocosCriados[0] },
      { alias: 'N_SERIE', nome: 'NÚMERO DE SÉRIE', tipo: TipoCampoEnum.INPUT, bloco: blocosCriados[0] },
      { alias: 'HORIMETRO', nome: 'HORÍMETRO', tipo: TipoCampoEnum.INPUT, bloco: blocosCriados[0] },
      { alias: 'MOTOR_VEICULO', nome: 'MOTOR NO VEÍCULO', tipo: TipoCampoEnum.INPUT, bloco: blocosCriados[0] },
      { alias: 'MOTOR_DOCUMENTO', nome: 'MOTOR NO DOCUMENTO', tipo: TipoCampoEnum.INPUT, bloco: blocosCriados[0] },
      { alias: 'MOTIVO_MOTOR_NAO_INFORMADO', nome: 'MOTIVO MOTOR NÃO INFORMADO', tipo: TipoCampoEnum.TEXTO, bloco: blocosCriados[0] },
      { alias: 'CHASSI_VEICULO', nome: 'CHASSI NO VEÍCULO', tipo: TipoCampoEnum.INPUT, bloco: blocosCriados[0] },
      { alias: 'CHASSI_DOCUMENTO', nome: 'CHASSI NO DOCUMENTO', tipo: TipoCampoEnum.INPUT, bloco: blocosCriados[0] },
      { alias: 'REMARCADO', nome: 'REMARCADO', tipo: TipoCampoEnum.BOLEANO, bloco: blocosCriados[0] },
      { alias: 'TIPO_VEICULO', nome: 'TIPO DE VEÍCULO', tipo: TipoCampoEnum.SELECT, bloco: blocosCriados[0] },
      { alias: 'CIDADE_JURISDICAO', nome: 'CIDADE / UF JURISDIÇÃO', tipo: TipoCampoEnum.INPUT, bloco: blocosCriados[0] },
      { alias: 'MARCA', nome: 'MARCA', tipo: TipoCampoEnum.INPUT, bloco: blocosCriados[0] },
      { alias: 'MODELO', nome: 'MODELO', tipo: TipoCampoEnum.INPUT, bloco: blocosCriados[0] },
      { alias: 'CODIGO_VEICULO', nome: 'CÓDIGO DO VEÍCULO', tipo: TipoCampoEnum.INPUT, bloco: blocosCriados[0] },
      { alias: 'ANO_FABRICACAO', nome: 'ANO FABRICAÇÃO', tipo: TipoCampoEnum.INPUT, bloco: blocosCriados[0] },
      { alias: 'ANO_MODELO', nome: 'ANO MODELO', tipo: TipoCampoEnum.INPUT, bloco: blocosCriados[0] },
      { alias: 'PLACA', nome: 'PLACA', tipo: TipoCampoEnum.INPUT, bloco: blocosCriados[0] },
      { alias: 'PLACA_VERMELHA', nome: 'PLACA VERMELHA', tipo: TipoCampoEnum.BOLEANO, bloco: blocosCriados[0] },
      { alias: 'CATEGORIA_PLACA_VERMELHA', nome: 'CATEGORIA PLACA VERMELHA', tipo: TipoCampoEnum.SELECT, bloco: blocosCriados[0] },
      { alias: 'ESPECIE', nome: 'ESPÉCIE', tipo: TipoCampoEnum.SELECT, bloco: blocosCriados[0] },
      { alias: 'COMBUSTIVEL', nome: 'COMBUSTÍVEL', tipo: TipoCampoEnum.SELECT, bloco: blocosCriados[0] },
      { alias: 'COR', nome: 'COR', tipo: TipoCampoEnum.SELECT, bloco: blocosCriados[0] },
      { alias: 'TIPO_PINTURA', nome: 'TIPO DE PINTURA', tipo: TipoCampoEnum.SELECT, bloco: blocosCriados[0] },
      { alias: 'NUMERO_PORTAS', nome: 'NÚMERO PORTAS', tipo: TipoCampoEnum.INPUT, bloco: blocosCriados[0] },
      { alias: 'RENAVAM', nome: 'RENAVAM', tipo: TipoCampoEnum.INPUT, bloco: blocosCriados[0] },
      { alias: 'CRLV', nome: 'CRLV', tipo: TipoCampoEnum.INPUT, bloco: blocosCriados[0] },
      { alias: 'CIDADE_CRLV', nome: 'CIDADE CRLV', tipo: TipoCampoEnum.INPUT, bloco: blocosCriados[0] },
      { alias: 'EMISSAO_CRLV_NF', nome: 'EMISSÃO CRLV/NF', tipo: TipoCampoEnum.INPUT_DATA, bloco: blocosCriados[0] },
      { alias: 'TIPO_PESSOA_CRLV', nome: 'TIPO DE PESSOA CRLV', tipo: TipoCampoEnum.SELECT, bloco: blocosCriados[0] },
      { alias: 'NOME_CRLV', nome: 'NOME CRLV', tipo: TipoCampoEnum.INPUT, bloco: blocosCriados[0] },
      { alias: 'CPF_CNPJ_CRLV', nome: 'CPF/CNPJ CRLV', tipo: TipoCampoEnum.INPUT, bloco: blocosCriados[0] },
      { alias: 'NOTA_FISCAL', nome: 'NOTA FISCAL', tipo: TipoCampoEnum.INPUT, bloco: blocosCriados[0] },
      { alias: 'ALIENADO_A', nome: 'ALIENADO À', tipo: TipoCampoEnum.INPUT, bloco: blocosCriados[0] },
      { alias: 'CAPACIDADE_CARGA', nome: 'CAPACIDADE DE CARGA', tipo: TipoCampoEnum.INPUT, bloco: blocosCriados[0] },
      { alias: 'CAPACIDADE_PASSAGEIROS', nome: 'CAPACIDADE DE PASSAGEIROS', tipo: TipoCampoEnum.INPUT, bloco: blocosCriados[0] },
      { alias: 'POTENCIA_MOTOR', nome: 'POTÊNCIA DO MOTOR', tipo: TipoCampoEnum.INPUT, bloco: blocosCriados[0] },
      { alias: 'CILINDRADAS', nome: 'CILINDRADAS', tipo: TipoCampoEnum.INPUT, bloco: blocosCriados[0] },
      { alias: 'QUANTIDADE_VALVULAS', nome: 'QUANTIDADE DE VÁLVULAS', tipo: TipoCampoEnum.INPUT, bloco: blocosCriados[0] },
      { alias: 'NUMERO_EIXOS', nome: 'NÚMERO DE EIXOS', tipo: TipoCampoEnum.INPUT, bloco: blocosCriados[0] },
      { alias: 'NUMERO_EIXOS_TRASEIROS', nome: 'NÚMERO DE EIXOS TRASEIROS', tipo: TipoCampoEnum.INPUT, bloco: blocosCriados[0] },
      { alias: 'NUMERO_EIXOS_AUXILIAR', nome: 'NÚMERO DE EIXOS AUXILIAR', tipo: TipoCampoEnum.INPUT, bloco: blocosCriados[0] },
      { alias: 'CMT', nome: 'CMT (CAPACIDADE MÁXIMA POR TRAÇÃO)', tipo: TipoCampoEnum.INPUT, bloco: blocosCriados[0] },
      { alias: 'PBT', nome: 'PBT (PESO BRUTO TOTAL)', tipo: TipoCampoEnum.INPUT, bloco: blocosCriados[0] },
      { alias: 'IDENTIFICACAO_CAMBIO', nome: 'IDENTIFICAÇÃO DO CÂMBIO', tipo: TipoCampoEnum.INPUT, bloco: blocosCriados[0] },
      { alias: 'MOTIVO_CAMBIO_NAO_INFORMADO', nome: 'MOTIVO CÂMBIO NÃO INFORMADO', tipo: TipoCampoEnum.TEXTO, bloco: blocosCriados[0] },
      { alias: 'TIPO_CAMBIO', nome: 'TIPO DE CÂMBIO', tipo: TipoCampoEnum.SELECT, bloco: blocosCriados[0] },
      { alias: 'QUILOMETRAGEM', nome: 'QUILOMETRAGEM', tipo: TipoCampoEnum.INPUT, bloco: blocosCriados[0] },
    ];
    await campoRepository.save(campos);
  }
}
