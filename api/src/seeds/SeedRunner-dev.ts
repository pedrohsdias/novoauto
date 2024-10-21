import { AppDataSourceCli } from '../config/data-source-cli';
import { FranquiaSeed } from './dev/franquia.seed';

async function runSeeds() {
  const dataSource = await AppDataSourceCli.initialize();

  try {
    console.log('Running dev Seed...');
    await new FranquiaSeed().run(dataSource);
    console.log('Seeding dev completed!');
  } catch (err) {
    console.error('Error running dev seeds', err);
  } finally {
    await dataSource.destroy();
  }
}

runSeeds();
