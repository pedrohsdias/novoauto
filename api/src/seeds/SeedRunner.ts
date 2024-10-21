import { AppDataSourceCli } from '../config/data-source-cli';
import { TabelasAuxiliaresSeed } from './tabelasAuxiliares.seed';
import { BlocosValoresAvaliacaoSeed } from './blocoValoresAvaliacao.seed';
import { BlocoDadosVeiculoSeed } from './blocoDadosVeiculo.seed';
import { BlocoEstruturaSeed } from './blocoEstrutura.seed';
import { BlocoPinturaSeed } from './blocoPintura.seed';
import { UsuarioSeed } from './usuario.seed';

async function runSeeds() {
  const dataSource = await AppDataSourceCli.initialize();

  try {
    console.log('Running Default Seed...');
    await new UsuarioSeed().run(dataSource);
    await new BlocoDadosVeiculoSeed().run(dataSource);
    await new BlocoEstruturaSeed().run(dataSource);
    await new BlocoPinturaSeed().run(dataSource);
    await new BlocosValoresAvaliacaoSeed().run(dataSource);
    await new TabelasAuxiliaresSeed().run(dataSource);

    console.log('Seeding completed!');
  } catch (err) {
    console.error('Error running seeds', err);
  } finally {
    await dataSource.destroy();
  }
}

runSeeds();
