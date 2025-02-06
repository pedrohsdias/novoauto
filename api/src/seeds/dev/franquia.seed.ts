import { DataSource } from 'typeorm';
import { PessoasEntity } from '../../comum/entity/pessoas.entity';
import { ClienteEntity } from '../../cliente/entity/cliente.entity';
import { TipoPessoaEnum } from '../../comum/enum/tipoPessoa.enum';
import { TipoClienteEnum } from '../../cliente/enum/tipoCliente.enum';

export class FranquiaSeed {
  async run(dataSource: DataSource): Promise<void> {
    const pessoaRepository = dataSource.getRepository(PessoasEntity);
    const franquiaRepository = dataSource.getRepository(ClienteEntity);
    const unidadeRepository = dataSource.getRepository(ClienteEntity);
    const pessoas = [
      {
        apelido: `Pessoa Autonoma`,
        nomeFormal: `Uma PF faz Vistoria, pra isso tem 1 Franquia e 1 Unidade`,
        documento: `111.111.111-11`,
        tipo: TipoPessoaEnum.PF,
      }, //pessoa 0
      {
        apelido: `Empresa Unica`,
        nomeFormal: `Uma PJ faz Vistoria, pra isso tem 1 Franquia e 1 Unidade`,
        documento: `22.222.222/0001-22`,
        tipo: TipoPessoaEnum.PJ,
      }, //pessoa1
      {
        apelido: `Empresa com Franqueadora`,
        nomeFormal: `Uma PJ com varias unidades,comeaça com uma unidade padrão`,
        documento: `33.333.333/0001-33`,
        tipo: TipoPessoaEnum.PJ,
      }, //pessoa2
      {
        apelido: `Empresa unidade 1`,
        nomeFormal: `Uma PF unidade da franqueadora`,
        documento: `33.333.333/0002-33`,
        tipo: TipoPessoaEnum.PJ,
      }, //pessoa3
      {
        apelido: `Empresa unidade 2`,
        nomeFormal: `Uma PF unidade da franqueadora`,
        documento: `33.333.333/0003-33`,
        tipo: TipoPessoaEnum.PJ,
      }, //pessoa4
    ];

    const pessoasSalvas = await pessoaRepository.save(pessoas);

    const franquias = [
      {
        apelido: `Franquia de autonomo`,
        linkLogo: `teste`,
        pessoa: pessoasSalvas[0],
        tipo: TipoClienteEnum.AUTONOMO,
      },
      {
        apelido: `Franquia de empresa solo`,
        linkLogo: `teste`,
        pessoa: pessoasSalvas[1],
        tipo: TipoClienteEnum.EMPRESA_UNICA,
      },
      {
        apelido: `Franquia de franquados`,
        linkLogo: `teste`,
        pessoa: pessoasSalvas[2],
        tipo: TipoClienteEnum.EMPRESA_FRANQUIA,
      },
    ];
    const franquiasSalvas = await franquiaRepository.save(franquias);
    const unidades = [
      {
        apelido: `Unidade de autonomo`,
        pessoa: pessoasSalvas[0],
        matriz: franquiasSalvas[0],
      },
      {
        apelido: `Unidade de empresa solo`,
        pessoa: pessoasSalvas[1],
        matriz: franquiasSalvas[1],
      },
      {
        apelido: `Unidade da matriz`,
        pessoa: pessoasSalvas[2],
        matriz: franquiasSalvas[2],
      },
      {
        apelido: `Unidade 1`,
        pessoa: pessoasSalvas[3],
        matriz: franquiasSalvas[2],
      },
      {
        apelido: `Unidade 2`,
        pessoa: pessoasSalvas[4],
        matriz: franquiasSalvas[2],
      },
    ];
    await unidadeRepository.save(unidades);
  }
}
