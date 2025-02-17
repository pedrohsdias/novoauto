import { DataSource } from 'typeorm';
import { CampoEntity } from '../template-modelo-vistoria/entity/campo.entity';
import { TipoCampoEnum } from '../template-modelo-vistoria/enum/tipoCampo.enum';
import { BlocoEntity } from '../template-modelo-vistoria/entity/bloco.entity';
import { TipoBlocoEnum } from '../template-modelo-vistoria/enum/tipoBloco.enum';

export class BlocoVeiculoCargaSeed {
  async run(dataSource: DataSource): Promise<void> {
    const blocoRepository = dataSource.getRepository(BlocoEntity);
    const campoRepository = dataSource.getRepository(CampoEntity);

    const blocos = [
      {
        nome: 'VEICULO_CARGA',
        tipo: TipoBlocoEnum.PADRAO,
        fontAwesomeIcon: 'fa-truck',
      }, //0
    ];

    const blocosCriados = await blocoRepository.save(blocos);

    const campos = [
      { alias: 'TIPO_CABINA', nome: 'TIPO DE CABINA', tipo: TipoCampoEnum.SELECT, bloco: blocosCriados[0] },
      { alias: 'TEM_RODOAR', nome: 'TEM RODOAR', tipo: TipoCampoEnum.BOLEANO, bloco: blocosCriados[0] },
      { alias: 'QUANTIDADE_RODOARES', nome: 'QUANTIDADE DE RODOARES', tipo: TipoCampoEnum.INPUT, bloco: blocosCriados[0] },
      { alias: 'TIPO_CARROCERIA', nome: 'TIPO DE CARROCERIA', tipo: TipoCampoEnum.SELECT, bloco: blocosCriados[0] },
      { alias: 'IDENTIFICACAO_CARROCERIA', nome: 'IDENTIFICAÇÃO DA CARROCERIA', tipo: TipoCampoEnum.INPUT, bloco: blocosCriados[0] },
      { alias: 'MOTIVO_CARROCERIA_NAO_INFORMADA', nome: 'MOTIVO CARROCERIA NÃO INFORMADA', tipo: TipoCampoEnum.TEXTO, bloco: blocosCriados[0] },
      { alias: 'MARCA_CARROCERIA', nome: 'MARCA CARROCERIA', tipo: TipoCampoEnum.INPUT, bloco: blocosCriados[0] },
      { alias: 'FORMA', nome: 'FORMA', tipo: TipoCampoEnum.SELECT, bloco: blocosCriados[0] },
      { alias: 'MATERIAL_CARROCERIA', nome: 'MATERIAL DA CARROCERIA', tipo: TipoCampoEnum.SELECT, bloco: blocosCriados[0] },
      { alias: 'N_EIXOS_DIANTEIROS', nome: 'Nº DE EIXOS DIANTEIROS', tipo: TipoCampoEnum.INPUT, bloco: blocosCriados[0] },
      { alias: 'N_EIXOS_TRASEIROS', nome: 'Nº DE EIXOS TRASEIROS', tipo: TipoCampoEnum.INPUT, bloco: blocosCriados[0] },
    ];
    await campoRepository.save(campos);
  }
}
