// import { DataSource } from 'typeorm';
import { join } from 'path';
import * as dotenv from 'dotenv';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
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
    return {
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      port: +process.env.DATABASE_PORT || 5432,
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      entities: [join(__dirname, '..', '**', 'entity', '*.entity.{ts,js}')],
      synchronize: false,
      // synchronize: true, modifica o banco de acordo com as models
    };
  }
}
