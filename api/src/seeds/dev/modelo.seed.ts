import { DataSource } from 'typeorm';
import { PessoasEntity } from '../../comum/entity/pessoas.entity';
import { ClienteEntity } from '../../cliente/entity/cliente.entity';
import { TipoPessoaEnum } from '../../comum/enum/tipoPessoa.enum';
import { TipoClienteEnum } from '../../cliente/enum/tipoCliente.enum';
import { ModelosVistoriaEntity } from '../../template-modelo-vistoria/entity/modelosVistoria.entity';
import { BlocosEntity } from '../../template-modelo-vistoria/entity/blocos.entity';
import { TipoServicoEnum } from '../../cliente/enum/tipoServico.enum';
import { ServicosEntity } from '../../cliente/entity/servicos.entity';
import { TipoIntegracaoEnum } from '../../integracao/enum/TipoIntegracao.enum';

export class ModeloSeed {
  async run(dataSource: DataSource): Promise<void> {
    const blocoRepository = dataSource.getRepository(BlocosEntity);
    const clienteRepository = dataSource.getRepository(ClienteEntity);
    const blocos = await blocoRepository.find();
    const clientes = await clienteRepository.find();
    const modeloRepository = dataSource.getRepository(ModelosVistoriaEntity);
    const servicoRepository = dataSource.getRepository(ServicosEntity);
    const modelos = [
      {
        nome: `Modelo Completo`,
        blocos: blocos
      },
      {
        nome: `Modelo MonoBloco`,
        blocos: [blocos[3]]
      },
    ];

    const modelosSalvo = await modeloRepository.save(modelos);
    const servicos = [
      {
        nome: `Servico Completo`,
        tipo: TipoServicoEnum.VISTORIA,
        custo: 30.65,
        preco: 130.12,
        integracao:TipoIntegracaoEnum.CAUTELAR,
        modelos: modelosSalvo,
        cliente:clientes[0]
      },
      {
        nome: `Servico Sem Consulta`,
        tipo: TipoServicoEnum.VISTORIA,
        custo: 40.65,
        preco: 140.12,
        integracao:TipoIntegracaoEnum.SEM_INTEGRACAO,
        modelos: [modelosSalvo[1]],
        cliente:clientes[1]
      },
      {
        nome: `Servico Com Consulta`,
        tipo: TipoServicoEnum.CONSULTA,
        custo: 60.65,
        preco: 160.12,
        integracao:TipoIntegracaoEnum.SEM_INTEGRACAO,
        cliente:clientes[1]
      }
    ];

    await servicoRepository.save(servicos);
  }
}
