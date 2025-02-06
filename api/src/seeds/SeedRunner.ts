import { AppDataSourceCli } from '../config/data-source-cli';
import { TabelasAuxiliaresSeed } from './tabelasAuxiliares.seed';
import { BlocoValoresAvaliacaoSeed } from './blocoValoresAvaliacao.seed';
import { BlocoDadosVeiculoSeed } from './blocoDadosVeiculo.seed';
import { BlocoEstruturaSeed } from './blocoEstrutura.seed';
import { BlocoPinturaSeed } from './blocoPintura.seed';
import { UsuarioSeed } from './usuario.seed';
import { BlocoValoresSolicitanteSeed } from './blocoSolicitante.seed';
import { BlocoProponenteSeed } from './blocoProponente.seed';
import { BlocoRealizacaoVistoriaSeed } from './blocoRealizacaoVistoria.seed';
import { BlocoLocalVistoriaSeed } from './blocoLocalVistoria.seed';
import { BlocoAtualProprietarioSeed } from './blocoAtualProprietario.seed';
import { BlocoCondutorSeed } from './blocoCondutor.seed';
import { BlocoVeiculoSeed } from './blocoVeiculo.seed';
import { BlocoVeiculoCargaSeed } from './blocoVeiculoCarga.seed';
import { BlocoItensAvaliacaoSeed } from './blocoItensAvaliacao.seed';

async function runSeeds() {
  const dataSource = await AppDataSourceCli.initialize();

  try {
    console.log('Running Default Seed...');
    await new UsuarioSeed().run(dataSource);
    await new TabelasAuxiliaresSeed().run(dataSource);
    await new BlocoDadosVeiculoSeed().run(dataSource);
    await new BlocoEstruturaSeed().run(dataSource);
    await new BlocoPinturaSeed().run(dataSource);
    await new BlocoValoresAvaliacaoSeed().run(dataSource);
    await new BlocoValoresSolicitanteSeed().run(dataSource);
    await new BlocoProponenteSeed().run(dataSource);
    await new BlocoRealizacaoVistoriaSeed().run(dataSource);
    await new BlocoLocalVistoriaSeed().run(dataSource);
    await new BlocoAtualProprietarioSeed().run(dataSource);
    await new BlocoCondutorSeed().run(dataSource);
    await new BlocoVeiculoSeed().run(dataSource);
    await new BlocoVeiculoCargaSeed().run(dataSource);
    await new BlocoItensAvaliacaoSeed().run(dataSource);

    console.log('Seeding completed!');
  } catch (err) {
    console.error('Error running seeds', err);
  } finally {
    await dataSource.destroy();
  }
}

runSeeds();
