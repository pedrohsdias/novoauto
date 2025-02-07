import { AppDataSourceCli } from '../config/data-source-cli';
import { ClienteSeed } from './dev/cliente.seed';
import { ModeloSeed } from './dev/modelo.seed';

async function runSeeds() {
  const dataSource = await AppDataSourceCli.initialize();

  try {
    console.log('Running dev Seed...');
    await new ClienteSeed().run(dataSource);
    await new ModeloSeed().run(dataSource);
    console.log('Seeding dev completed!');
  } catch (err) {
    console.error('Error running dev seeds', err);
  } finally {
    await dataSource.destroy();
  }
}

runSeeds();
