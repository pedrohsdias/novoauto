import { Injectable } from '@nestjs/common';
import { promises as fs } from 'fs';
import * as path from 'path';

@Injectable()
export class MockService {
  async readJsonFile<T>(fileName: string): Promise<T> {
    try {
      // @ts-ignore
      const fullPath = path.resolve(process.cwd(),'src/mocks', `${fileName}.json`);
      const fileContent = await fs.readFile(fullPath, 'utf-8');
      return JSON.parse(fileContent) as T;
    } catch (error) {
      throw new Error(`Erro ao ler o arquivo JSON: ${error.message}`);
    }
  }
}