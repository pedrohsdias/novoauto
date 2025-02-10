// import { DataSource } from 'typeorm';
import { join } from 'path';
import * as dotenv from 'dotenv';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
// noinspection TypeScriptValidateTypes
dotenv.config();

// export const AppDataSource = new DataSource({
//   type: 'postgres',
//   host: process.env.DATABASE_HOST,
//   port: +process.env.DATABASE_PORT || 5432,
//   username: process.env.DATABASE_USERNAME,
//   password: process.env.DATABASE_PASSWORD,
//   database: process.env.DATABASE_NAME,
//   entities: [join(__dirname, '..', '**', 'entity', '*.entity.{ts,js}')],
//   synchronize: false,
// });
@Injectable()
export class DbConfigService implements TypeOrmOptionsFactory {
  createTypeOrmOptions(): TypeOrmModuleOptions | Promise<TypeOrmModuleOptions> {
    const { env } = process;
    return {
      type: 'postgres',
      host: env.DATABASE_HOST,
      port: Number(env.DATABASE_PORT) || 5432,
      username: env.DATABASE_USERNAME,
      password: env.DATABASE_PASSWORD,
      database: env.DATABASE_NAME,
      entities: [join(__dirname, '..', '**', 'entity', '*.entity.{ts,js}')],
      synchronize: false,
      logging: true,
      // synchronize: true, modifica o banco de acordo com as models
    };
  }
}
