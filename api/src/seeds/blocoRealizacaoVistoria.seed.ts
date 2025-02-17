import { DataSource } from 'typeorm';
import { CampoEntity } from '../template-modelo-vistoria/entity/campo.entity';
import { TipoCampoEnum } from '../template-modelo-vistoria/enum/tipoCampo.enum';
import { BlocoEntity } from '../template-modelo-vistoria/entity/bloco.entity';
import { TipoBlocoEnum } from '../template-modelo-vistoria/enum/tipoBloco.enum';

export class BlocoRealizacaoVistoriaSeed {
  async run(dataSource: DataSource): Promise<void> {
    const blocoRepository = dataSource.getRepository(BlocoEntity);
    const campoRepository = dataSource.getRepository(CampoEntity);

    const blocos = [
      {
        nome: 'REALIZACAO_VISTORIA',
        tipo: TipoBlocoEnum.PADRAO,
        fontAwesomeIcon: 'fa-clipboard-check',
      }, //0
    ];

    const blocosCriados = await blocoRepository.save(blocos);

    const campos = [
      { alias: 'DATA_DESEJADA', nome: 'DATA DESEJADA', tipo: TipoCampoEnum.INPUT_DATA, bloco: blocosCriados[0] },
      { alias: 'DATA_VALIDADE', nome: 'DATA DE VALIDADE', tipo: TipoCampoEnum.INPUT_DATA, bloco: blocosCriados[0] },
      { alias: 'PERIODO', nome: 'PERÍODO', tipo: TipoCampoEnum.SELECT, bloco: blocosCriados[0] },
      { alias: 'VISTORIADOR', nome: 'VISTORIADOR', tipo: TipoCampoEnum.INPUT, bloco: blocosCriados[0] },
      { alias: 'OFICINA', nome: 'OFICINA', tipo: TipoCampoEnum.INPUT, bloco: blocosCriados[0] },
      { alias: 'TIPO_PESSOA', nome: 'TIPO DE PESSOA', tipo: TipoCampoEnum.SELECT, bloco: blocosCriados[0] },
      { alias: 'RESPONSAVEL', nome: 'RESPONSÁVEL', tipo: TipoCampoEnum.INPUT, bloco: blocosCriados[0] },
      { alias: 'EMAIL', nome: 'E-MAIL', tipo: TipoCampoEnum.INPUT_EMAIL, bloco: blocosCriados[0] },
      { alias: 'TELEFONE', nome: 'TELEFONE', tipo: TipoCampoEnum.INPUT, bloco: blocosCriados[0] },
      { alias: 'CELULAR', nome: 'CELULAR', tipo: TipoCampoEnum.INPUT, bloco: blocosCriados[0] },
      { alias: 'SINISTRO', nome: 'SINISTRO', tipo: TipoCampoEnum.INPUT, bloco: blocosCriados[0] },
      { alias: 'TIPO_LAUDO', nome: 'TIPO DE LAUDO', tipo: TipoCampoEnum.SELECT, bloco: blocosCriados[0] },
      { alias: 'FINALIDADE', nome: 'FINALIDADE', tipo: TipoCampoEnum.SELECT, bloco: blocosCriados[0] },
      { alias: 'NRO_LAUDO_CLIENTE_VOUCHER_SENHA', nome: 'Nº O.S. CLIENTE', tipo: TipoCampoEnum.INPUT, bloco: blocosCriados[0] },
      { alias: 'APOLICE_BDU_GRUPO_COTA', nome: 'APÓLICE/BDU/GRUPO COTA', tipo: TipoCampoEnum.INPUT, bloco: blocosCriados[0] },
      { alias: 'DANFE', nome: 'DANFE', tipo: TipoCampoEnum.INPUT, bloco: blocosCriados[0] },
      { alias: 'CTRC', nome: 'CTRC', tipo: TipoCampoEnum.INPUT, bloco: blocosCriados[0] },
      { alias: 'FROTA', nome: 'FROTA', tipo: TipoCampoEnum.INPUT, bloco: blocosCriados[0] },
      { alias: 'VALOR_NOTA_FISCAL', nome: 'VALOR NOTA FISCAL', tipo: TipoCampoEnum.INPUT_MONETARIO, bloco: blocosCriados[0] },
      { alias: 'DATA_REALIZACAO', nome: 'DATA REALIZAÇÃO', tipo: TipoCampoEnum.INPUT_DATA, bloco: blocosCriados[0] },
      { alias: 'HORA_INICIO', nome: 'HORA INÍCIO', tipo: TipoCampoEnum.INPUT_DATA_HORA, bloco: blocosCriados[0] },
      { alias: 'HORA_TERMINO', nome: 'HORA TÉRMINO', tipo: TipoCampoEnum.INPUT_DATA_HORA, bloco: blocosCriados[0] },
      { alias: 'TOTAL_KM_VISTORIA_DOMICILIO', nome: 'TOTAL KM VISTORIA DOMICÍLIO', tipo: TipoCampoEnum.INPUT, bloco: blocosCriados[0] },
    ];
    await campoRepository.save(campos);
  }
}
