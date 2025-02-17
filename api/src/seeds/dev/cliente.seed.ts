import { DataSource } from 'typeorm';
import { PessoaEntity } from '../../comum/entity/pessoa.entity';
import { ClienteEntity } from '../../cliente/entity/cliente.entity';
import { TipoPessoaEnum } from '../../comum/enum/tipoPessoa.enum';
import { TipoClienteEnum } from '../../cliente/enum/tipoCliente.enum';

export class ClienteSeed {
  async run(dataSource: DataSource): Promise<void> {
    const pessoaRepository = dataSource.getRepository(PessoaEntity);
    const clienteRepository = dataSource.getRepository(ClienteEntity);
    const pessoas = [
      {
        apelido: `Pessoa Autonoma`,
        nomeFormal: `Uma PF faz Vistoria, pra isso é um cliente sem matriz e sem ser referenciado`,
        documento: `111.111.111-11`,
        tipo: TipoPessoaEnum.PF,
      }, //pessoa 0
      {
        apelido: `Empresa Unica`,
        nomeFormal: `Uma PJ faz Vistoria, pra isso é um cliente sem matriz e sem ser referenciado`,
        documento: `22.222.222/0001-22`,
        tipo: TipoPessoaEnum.PJ,
      }, //pessoa1
      {
        apelido: `Empresa Matriz`,
        nomeFormal: `Uma PJ com filiais,pra isso é um cliente que é referenciado`,
        documento: `33.333.333/0001-33`,
        tipo: TipoPessoaEnum.PJ,
      }, //pessoa2
      {
        apelido: `Empresa unidade 1`,
        nomeFormal: `Uma PJ, que é cliente e referencia a matriz`,
        documento: `33.333.333/0002-33`,
        tipo: TipoPessoaEnum.PJ,
      }, //pessoa3
      {
        apelido: `Empresa unidade 2`,
        nomeFormal: `Uma PJ, que é cliente e referencia a matriz`,
        documento: `33.333.333/0003-33`,
        tipo: TipoPessoaEnum.PJ,
      }, //pessoa4
    ];

    const pessoasSalvas = await pessoaRepository.save(pessoas);

    const clientesMatriz = [
      {
        apelido: `Autonomo`,
        linkLogo: `teste`,
        pessoa: pessoasSalvas[0],
        tipo: TipoClienteEnum.EMPRESA_UNICA,
      },//0
      {
        apelido: `ECV`,
        linkLogo: `teste`,
        pessoa: pessoasSalvas[1],
        tipo: TipoClienteEnum.EMPRESA_UNICA,
      },//1
      {
        apelido: `Matriz`,
        linkLogo: `teste`,
        pessoa: pessoasSalvas[2],
        tipo: TipoClienteEnum.EMPRESA_FRANQUIADORA,
      },//2
  ]

    const matriz = await clienteRepository.save(clientesMatriz);
    const clientesFiliais = [
      {
        apelido: `Filial 1`,
        pessoa: pessoasSalvas[0],
        tipo: TipoClienteEnum.EMPRESA_FRANQUEADA,
        matriz: matriz[2],
      },
      {
        apelido: `Filial 2`,
        pessoa: pessoasSalvas[1],
        tipo: TipoClienteEnum.EMPRESA_FRANQUEADA,
        matriz: matriz[2],
      },
    ];
    await clienteRepository.save(clientesFiliais);
  }
}
