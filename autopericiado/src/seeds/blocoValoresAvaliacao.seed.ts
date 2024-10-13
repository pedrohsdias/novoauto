import { DataSource } from 'typeorm';
import { CamposEntity } from '../template-modelo-vistoria/entity/campos.entity';
import { TipoCampoEnum } from '../template-modelo-vistoria/enum/tipoCampo.enum';
import { BlocosEntity } from '../template-modelo-vistoria/entity/blocos.entity';
import { TipoBLocoEnum } from '../template-modelo-vistoria/enum/tipoBLoco.enum';

export class BlocosValoresAvaliacaoSeed {
  async run(dataSource: DataSource): Promise<void> {
    const blocoRepository = dataSource.getRepository(BlocosEntity);
    const campoRepository = dataSource.getRepository(CamposEntity);

    const blocos = [
      {
        nome: 'VALORES AVALIAÇÃO',
        tipo: TipoBLocoEnum.PADRAO,
        fontAwesomeIcon: 'fa-comments-dollar',
      }, //0
    ];

    const blocosCriados = await blocoRepository.save(blocos);

    const campos = [
      //valores avaliação
      {
        nome: 'REFERÊNCIA M.O. VEÍCULO',
        alias: 'REFERENCIA_MO_VEICULO',
        tipo: TipoCampoEnum.INPUT_MONETARIO,
        bloco: blocosCriados[0],
      },
      {
        nome: 'VALOR NOTA FISCAL',
        alias: 'VALOR_NOTA_FISCAL',
        tipo: TipoCampoEnum.INPUT_MONETARIO,
        bloco: blocosCriados[0],
      },
      {
        nome: 'VALOR AVALIADO',
        alias: 'VALOR_AVALIADO',
        tipo: TipoCampoEnum.INPUT_MONETARIO,
        bloco: blocosCriados[0],
      },
      {
        nome: 'VALOR FIPE',
        alias: 'VALOR_FIPE',
        tipo: TipoCampoEnum.INPUT_MONETARIO,
        bloco: blocosCriados[0],
      },
      {
        nome: 'VALOR ACESSÓRIOS',
        alias: 'VALOR_ACESSORIOS',
        tipo: TipoCampoEnum.INPUT_MONETARIO,
        bloco: blocosCriados[0],
      },
      {
        nome: 'VALOR IMPLEMENTOS',
        alias: 'VALOR_IMPLEMENTOS',
        tipo: TipoCampoEnum.INPUT_MONETARIO,
        bloco: blocosCriados[0],
      },
      {
        nome: 'VALOR REF. NOTA FISCAL',
        alias: 'VALOR_REF_NF',
        tipo: TipoCampoEnum.INPUT_MONETARIO,
        bloco: blocosCriados[0],
      },
      {
        nome: 'VALOR REF. AVALIADO',
        alias: 'VALOR_REF_AVALIADO',
        tipo: TipoCampoEnum.INPUT_MONETARIO,
        bloco: blocosCriados[0],
      },
      {
        nome: 'VALOR REF. FIPE',
        alias: 'VALOR_REF_FIPE',
        tipo: TipoCampoEnum.INPUT_MONETARIO,
        bloco: blocosCriados[0],
      },
      {
        nome: '% CHASSI REM',
        alias: 'PERC_CHASSI_REM',
        tipo: TipoCampoEnum.INPUT_MONETARIO,
        bloco: blocosCriados[0],
      },
      {
        nome: 'VAR. CHASSI REM NF',
        alias: 'VAR_CHASSI_REM_NF',
        tipo: TipoCampoEnum.INPUT_MONETARIO,
        bloco: blocosCriados[0],
      },
      {
        nome: 'VAR. CHASSI REM AVALIADO',
        alias: 'VAR_CHASSI_REM_AVALIADO',
        tipo: TipoCampoEnum.INPUT_MONETARIO,
        bloco: blocosCriados[0],
      },
      {
        nome: 'VAR. CHASSI REM FIPE',
        alias: 'VAR_CHASSI_REM_FIPE',
        tipo: TipoCampoEnum.INPUT_MONETARIO,
        bloco: blocosCriados[0],
      },
      {
        nome: '% VAR. SUGERIDA',
        alias: 'PERC_VAR_SUGERIDA',
        tipo: TipoCampoEnum.INPUT_MONETARIO,
        bloco: blocosCriados[0],
      },
      {
        nome: 'VAR. SUGERIDA NF',
        alias: 'VAR_SUGERIDA_NF',
        tipo: TipoCampoEnum.INPUT_MONETARIO,
        bloco: blocosCriados[0],
      },
      {
        nome: 'VAR. SUGERIDA AVALIADO',
        alias: 'VAR_SUGERIDA_AVALIADO',
        tipo: TipoCampoEnum.INPUT_MONETARIO,
        bloco: blocosCriados[0],
      },
      {
        nome: 'VAR. SUGERIDA FIPE',
        alias: 'VAR_SUGERIDA_FIPE',
        tipo: TipoCampoEnum.INPUT_MONETARIO,
        bloco: blocosCriados[0],
      },
      {
        nome: 'VALOR M.O.',
        alias: 'VALOR_MO',
        tipo: TipoCampoEnum.INPUT_MONETARIO,
        bloco: blocosCriados[0],
      },
      {
        nome: 'VALOR PEÇAS',
        alias: 'VALOR_PECAS',
        tipo: TipoCampoEnum.INPUT_MONETARIO,
        bloco: blocosCriados[0],
      },
      {
        nome: 'VALOR DEDUÇÕES',
        alias: 'VALOR_DEDUCOES',
        tipo: TipoCampoEnum.INPUT_MONETARIO,
        bloco: blocosCriados[0],
      },
      {
        nome: 'COMPL. REP. MECÂNICOS',
        alias: 'COMPL_REP_MECANICOS',
        tipo: TipoCampoEnum.INPUT_MONETARIO,
        bloco: blocosCriados[0],
      },
      {
        nome: 'COMPL. REP. BORRACHARIA',
        alias: 'COMPL_REP_BORRACHARIA',
        tipo: TipoCampoEnum.INPUT_MONETARIO,
        bloco: blocosCriados[0],
      },
      {
        nome: 'COMPL. REP. TAPEÇARIA',
        alias: 'COMPL_REP_TAPECARIA',
        tipo: TipoCampoEnum.INPUT_MONETARIO,
        bloco: blocosCriados[0],
      },
      {
        nome: 'VALOR NOTA FISCAL (RESUMO)',
        alias: 'VALOR_NOTA_FISCAL_RESUMO',
        tipo: TipoCampoEnum.INPUT_MONETARIO,
        bloco: blocosCriados[0],
      },
      {
        nome: 'VALOR AVALIADO (RESUMO)',
        alias: 'VALOR_AVALIADO_RESUMO',
        tipo: TipoCampoEnum.INPUT_MONETARIO,
        bloco: blocosCriados[0],
      },
      {
        nome: 'VALOR FIPE (RESUMO)',
        alias: 'VALOR_FIPE_RESUMO',
        tipo: TipoCampoEnum.INPUT_MONETARIO,
        bloco: blocosCriados[0],
      },
      {
        nome: 'VALOR DPVAT',
        alias: 'VALOR_DPVAT',
        tipo: TipoCampoEnum.INPUT_MONETARIO,
        bloco: blocosCriados[0],
      },
      {
        nome: 'VALOR LICENC./TAXAS',
        alias: 'VALOR_LICENC_TAXAS',
        tipo: TipoCampoEnum.INPUT_MONETARIO,
        bloco: blocosCriados[0],
      },
      {
        nome: 'VALOR IPVA',
        alias: 'VALOR_IPVA',
        tipo: TipoCampoEnum.INPUT_MONETARIO,
        bloco: blocosCriados[0],
      },
      {
        nome: 'VALOR MULTAS',
        alias: 'VALOR_MULTAS',
        tipo: TipoCampoEnum.INPUT_MONETARIO,
        bloco: blocosCriados[0],
      },
      {
        nome: 'TOTAL DÉBITOS',
        alias: 'TOTAL_DEBITOS',
        tipo: TipoCampoEnum.INPUT_MONETARIO,
        bloco: blocosCriados[0],
      },
      {
        nome: 'VALOR FINAL NF',
        alias: 'VALOR_FINAL_NF',
        tipo: TipoCampoEnum.INPUT_MONETARIO,
        bloco: blocosCriados[0],
      },
      {
        nome: 'VALOR FINAL AVALIADO',
        alias: 'VALOR_FINAL_AVALIADO',
        tipo: TipoCampoEnum.INPUT_MONETARIO,
        bloco: blocosCriados[0],
      },
      {
        nome: 'VALOR FINAL FIPE',
        alias: 'VALOR_FINAL_FIPE',
        tipo: TipoCampoEnum.INPUT_MONETARIO,
        bloco: blocosCriados[0],
      },
      {
        nome: 'ESTADO GERAL VEÍCULO',
        alias: 'ESTADO_GERAL_VEICULO',
        tipo: TipoCampoEnum.INPUT_MONETARIO,
        bloco: blocosCriados[0],
      },
    ];
    await campoRepository.save(campos);
  }
}
