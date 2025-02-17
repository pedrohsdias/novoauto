import { DataSource } from 'typeorm';
import { ClienteEntity } from '../../cliente/entity/cliente.entity';
import { ModeloVistoriaEntity } from '../../template-modelo-vistoria/entity/modeloVistoria.entity';
import { BlocoEntity } from '../../template-modelo-vistoria/entity/bloco.entity';
import { TipoServicoEnum } from '../../cliente/enum/tipoServico.enum';
import { ServicoEntity } from '../../cliente/entity/servico.entity';
import { ConsultasVeicularesEnum } from '../../servicos-externos/enum/ConsultasVeicularesEnum';

export class ModeloSeed {
  async run(dataSource: DataSource): Promise<void> {
    const blocoRepository = dataSource.getRepository(BlocoEntity);
    const clienteRepository = dataSource.getRepository(ClienteEntity);
    const blocos = await blocoRepository.find();
    const clientes = await clienteRepository.find();
    const modeloRepository = dataSource.getRepository(ModeloVistoriaEntity);
    const servicoRepository = dataSource.getRepository(ServicoEntity);
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
        integracao:ConsultasVeicularesEnum.CONSULTA_CAUTELAR,
        modelos: modelosSalvo,
        cliente:clientes[0]
      },
      {
        nome: `Servico Sem Consulta`,
        tipo: TipoServicoEnum.VISTORIA,
        custo: 40.65,
        preco: 140.12,
        integracao:ConsultasVeicularesEnum.SEM_CONSULTA,
        modelos: [modelosSalvo[1]],
        cliente:clientes[1]
      },
      {
        nome: `Servico Com Consulta`,
        tipo: TipoServicoEnum.CONSULTA,
        custo: 60.65,
        preco: 160.12,
        integracao:ConsultasVeicularesEnum.SEM_CONSULTA,
        cliente:clientes[1]
      }
    ];

    await servicoRepository.save(servicos);
  }
}
