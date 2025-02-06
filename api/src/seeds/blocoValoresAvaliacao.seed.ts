import { DataSource } from 'typeorm';
import { CamposEntity } from '../template-modelo-vistoria/entity/campos.entity';
import { TipoCampoEnum } from '../template-modelo-vistoria/enum/tipoCampo.enum';
import { BlocosEntity } from '../template-modelo-vistoria/entity/blocos.entity';
import { TipoBlocoEnum } from '../template-modelo-vistoria/enum/tipoBloco.enum';

export class BlocoValoresAvaliacaoSeed {
  async run(dataSource: DataSource): Promise<void> {
    const blocoRepository = dataSource.getRepository(BlocosEntity);
    const campoRepository = dataSource.getRepository(CamposEntity);

    const blocos = [
      {
        nome: 'VALORES AVALIAÇÃO', 
        tipo: TipoBlocoEnum.PADRAO,
        fontAwesomeIcon: 'fa-comments-dollar',}, //0
    ];

    const blocosCriados = await blocoRepository.save(blocos);

    const campos = [
      //valores avaliação
      {alias: 'REFERÊNCIA M.O. VEÍCULO', nome: 'REFERENCIA_MO_VEICULO', tipo: TipoCampoEnum.INPUT_MONETARIO, bloco: blocosCriados[0],},
      {alias: 'VALOR NOTA FISCAL', nome: 'VALOR_NOTA_FISCAL', tipo: TipoCampoEnum.INPUT_MONETARIO, bloco: blocosCriados[0],},
      {alias: 'VALOR AVALIADO', nome: 'VALOR_AVALIADO', tipo: TipoCampoEnum.INPUT_MONETARIO, bloco: blocosCriados[0],},
      {alias: 'VALOR FIPE', nome: 'VALOR_FIPE', tipo: TipoCampoEnum.INPUT_MONETARIO, bloco: blocosCriados[0],},
      {alias: 'VALOR ACESSÓRIOS', nome: 'VALOR_ACESSORIOS', tipo: TipoCampoEnum.INPUT_MONETARIO, bloco: blocosCriados[0],},
      {alias: 'VALOR IMPLEMENTOS', nome: 'VALOR_IMPLEMENTOS', tipo: TipoCampoEnum.INPUT_MONETARIO, bloco: blocosCriados[0],},
      {alias: 'VALOR REF. NOTA FISCAL', nome: 'VALOR_REF_NF', tipo: TipoCampoEnum.INPUT_MONETARIO, bloco: blocosCriados[0],},
      {alias: 'VALOR REF. AVALIADO', nome: 'VALOR_REF_AVALIADO', tipo: TipoCampoEnum.INPUT_MONETARIO, bloco: blocosCriados[0],},
      {alias: 'VALOR REF. FIPE', nome: 'VALOR_REF_FIPE', tipo: TipoCampoEnum.INPUT_MONETARIO, bloco: blocosCriados[0],},
      {alias: '% CHASSI REM', nome: 'PERC_CHASSI_REM', tipo: TipoCampoEnum.INPUT_MONETARIO, bloco: blocosCriados[0],},
      {alias: 'VAR. CHASSI REM NF', nome: 'VAR_CHASSI_REM_NF', tipo: TipoCampoEnum.INPUT_MONETARIO, bloco: blocosCriados[0],},
      {alias: 'VAR. CHASSI REM AVALIADO', nome: 'VAR_CHASSI_REM_AVALIADO', tipo: TipoCampoEnum.INPUT_MONETARIO, bloco: blocosCriados[0],},
      {alias: 'VAR. CHASSI REM FIPE', nome: 'VAR_CHASSI_REM_FIPE', tipo: TipoCampoEnum.INPUT_MONETARIO, bloco: blocosCriados[0],},
      {alias: '% VAR. SUGERIDA', nome: 'PERC_VAR_SUGERIDA', tipo: TipoCampoEnum.INPUT_MONETARIO, bloco: blocosCriados[0],},
      {alias: 'VAR. SUGERIDA NF', nome: 'VAR_SUGERIDA_NF', tipo: TipoCampoEnum.INPUT_MONETARIO, bloco: blocosCriados[0],},
      {alias: 'VAR. SUGERIDA AVALIADO', nome: 'VAR_SUGERIDA_AVALIADO', tipo: TipoCampoEnum.INPUT_MONETARIO, bloco: blocosCriados[0],},
      {alias: 'VAR. SUGERIDA FIPE', nome: 'VAR_SUGERIDA_FIPE', tipo: TipoCampoEnum.INPUT_MONETARIO, bloco: blocosCriados[0],},
      {alias: 'VALOR M.O.', nome: 'VALOR_MO', tipo: TipoCampoEnum.INPUT_MONETARIO, bloco: blocosCriados[0],},
      {alias: 'VALOR PEÇAS', nome: 'VALOR_PECAS', tipo: TipoCampoEnum.INPUT_MONETARIO, bloco: blocosCriados[0],},
      {alias: 'VALOR DEDUÇÕES', nome: 'VALOR_DEDUCOES', tipo: TipoCampoEnum.INPUT_MONETARIO, bloco: blocosCriados[0],},
      {alias: 'COMPL. REP. MECÂNICOS', nome: 'COMPL_REP_MECANICOS', tipo: TipoCampoEnum.INPUT_MONETARIO, bloco: blocosCriados[0],},
      {alias: 'COMPL. REP. BORRACHARIA', nome: 'COMPL_REP_BORRACHARIA', tipo: TipoCampoEnum.INPUT_MONETARIO, bloco: blocosCriados[0],},
      {alias: 'COMPL. REP. TAPEÇARIA', nome: 'COMPL_REP_TAPECARIA', tipo: TipoCampoEnum.INPUT_MONETARIO, bloco: blocosCriados[0],},
      {alias: 'VALOR NOTA FISCAL (RESUMO)', nome: 'VALOR_NOTA_FISCAL_RESUMO', tipo: TipoCampoEnum.INPUT_MONETARIO, bloco: blocosCriados[0],},
      {alias: 'VALOR AVALIADO (RESUMO)', nome: 'VALOR_AVALIADO_RESUMO', tipo: TipoCampoEnum.INPUT_MONETARIO, bloco: blocosCriados[0],},
      {alias: 'VALOR FIPE (RESUMO)', nome: 'VALOR_FIPE_RESUMO', tipo: TipoCampoEnum.INPUT_MONETARIO, bloco: blocosCriados[0],},
      {alias: 'VALOR DPVAT', nome: 'VALOR_DPVAT', tipo: TipoCampoEnum.INPUT_MONETARIO, bloco: blocosCriados[0],},
      {alias: 'VALOR LICENC./TAXAS', nome: 'VALOR_LICENC_TAXAS', tipo: TipoCampoEnum.INPUT_MONETARIO, bloco: blocosCriados[0],},
      {alias: 'VALOR IPVA', nome: 'VALOR_IPVA', tipo: TipoCampoEnum.INPUT_MONETARIO, bloco: blocosCriados[0],},
      {alias: 'VALOR MULTAS', nome: 'VALOR_MULTAS', tipo: TipoCampoEnum.INPUT_MONETARIO, bloco: blocosCriados[0],},
      {alias: 'TOTAL DÉBITOS', nome: 'TOTAL_DEBITOS', tipo: TipoCampoEnum.INPUT_MONETARIO, bloco: blocosCriados[0],},
      {alias: 'VALOR FINAL NF', nome: 'VALOR_FINAL_NF', tipo: TipoCampoEnum.INPUT_MONETARIO, bloco: blocosCriados[0],},
      {alias: 'VALOR FINAL AVALIADO', nome: 'VALOR_FINAL_AVALIADO', tipo: TipoCampoEnum.INPUT_MONETARIO, bloco: blocosCriados[0],},
      {alias: 'VALOR FINAL FIPE', nome: 'VALOR_FINAL_FIPE', tipo: TipoCampoEnum.INPUT_MONETARIO, bloco: blocosCriados[0],},
      {alias: 'ESTADO GERAL VEÍCULO', nome: 'ESTADO_GERAL_VEICULO', tipo: TipoCampoEnum.INPUT_MONETARIO, bloco: blocosCriados[0],},
    ];
    await campoRepository.save(campos);
  }
}
