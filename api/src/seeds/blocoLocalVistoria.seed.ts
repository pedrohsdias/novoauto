import { DataSource } from 'typeorm';
import { CampoEntity } from '../template-modelo-vistoria/entity/campo.entity';
import { TipoCampoEnum } from '../template-modelo-vistoria/enum/tipoCampo.enum';
import { BlocoEntity } from '../template-modelo-vistoria/entity/bloco.entity';
import { TipoBlocoEnum } from '../template-modelo-vistoria/enum/tipoBloco.enum';

export class BlocoLocalVistoriaSeed {
  async run(dataSource: DataSource): Promise<void> {
    const blocoRepository = dataSource.getRepository(BlocoEntity);
    const campoRepository = dataSource.getRepository(CampoEntity);

    const blocos = [
      {
        nome: 'LOCAL_VISTORIA',
        tipo: TipoBlocoEnum.PADRAO,
        fontAwesomeIcon: 'fa-map-marker-alt',
      }, //0
    ];

    const blocosCriados = await blocoRepository.save(blocos);

    const campos = [
      { alias: 'CEP', nome: 'CEP', tipo: TipoCampoEnum.INPUT, bloco: blocosCriados[0] },
      { alias: 'TIPO_ENDERECO', nome: 'TIPO DE ENDEREÇO', tipo: TipoCampoEnum.SELECT, bloco: blocosCriados[0] },
      { alias: 'TIPO_LOGRADOURO', nome: 'TIPO DE LOGRADOURO', tipo: TipoCampoEnum.SELECT, bloco: blocosCriados[0] },
      { alias: 'ENDERECO', nome: 'ENDEREÇO', tipo: TipoCampoEnum.INPUT, bloco: blocosCriados[0] },
      { alias: 'NUMERO', nome: 'NÚMERO', tipo: TipoCampoEnum.INPUT, bloco: blocosCriados[0] },
      { alias: 'COMPLEMENTO', nome: 'COMPLEMENTO', tipo: TipoCampoEnum.INPUT, bloco: blocosCriados[0] },
      { alias: 'BAIRRO', nome: 'BAIRRO', tipo: TipoCampoEnum.INPUT, bloco: blocosCriados[0] },
      { alias: 'CIDADE', nome: 'CIDADE', tipo: TipoCampoEnum.INPUT, bloco: blocosCriados[0] },
      { alias: 'CONTATO', nome: 'CONTATO', tipo: TipoCampoEnum.INPUT, bloco: blocosCriados[0] },
      { alias: 'TELEFONE_1', nome: 'TELEFONE 1', tipo: TipoCampoEnum.INPUT, bloco: blocosCriados[0] },
      { alias: 'TELEFONE_2', nome: 'TELEFONE 2', tipo: TipoCampoEnum.INPUT, bloco: blocosCriados[0] },
      { alias: 'REFERENCIA_OBS', nome: 'REFERÊNCIA/OBS.', tipo: TipoCampoEnum.TEXTO, bloco: blocosCriados[0] },
    ];
    await campoRepository.save(campos);
  }
}
