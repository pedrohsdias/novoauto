import { MigrationInterface, QueryRunner } from 'typeorm';

export class AlteraFranquia1729473579241 implements MigrationInterface {
  name = 'AlteraFranquia1729473579241';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TYPE "public"."franquiadores_tipo_franquia_enum" AS ENUM('pf ou mei', 'pj unico', 'pj com filias ')`,
    );
    await queryRunner.query(
      `ALTER TABLE "franquiadores" ADD "tipo_franquia" "public"."franquiadores_tipo_franquia_enum" NOT NULL DEFAULT 'pj unico'`,
    );
    await queryRunner.query(
      `ALTER TABLE "franquiadores" DROP CONSTRAINT "FK_041bb5658e66c141a4ea3605cc6"`,
    );
    await queryRunner.query(
      `ALTER TABLE "franquiadores" ALTER COLUMN "pessoa_id" SET NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "enderecos" DROP CONSTRAINT "FK_165ce82c1d3abec9c2df4e5a5bc"`,
    );
    await queryRunner.query(
      `ALTER TABLE "enderecos" ALTER COLUMN "pessoa_id" SET NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "telefones" DROP CONSTRAINT "FK_8b7c9a07d784e288f1a0232cb6c"`,
    );
    await queryRunner.query(
      `ALTER TABLE "telefones" ALTER COLUMN "pessoa_id" SET NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "unidades" DROP CONSTRAINT "FK_e187bfe3639a17ebc5d1e2b6469"`,
    );
    await queryRunner.query(
      `ALTER TABLE "unidades" ALTER COLUMN "pessoa_id" SET NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "clientes" DROP CONSTRAINT "FK_92f90250bdb09058ada90ef5da7"`,
    );
    await queryRunner.query(
      `ALTER TABLE "clientes" ALTER COLUMN "pessoa_id" SET NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "franquiadores" ADD CONSTRAINT "FK_041bb5658e66c141a4ea3605cc6" FOREIGN KEY ("pessoa_id") REFERENCES "pessoa"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "enderecos" ADD CONSTRAINT "FK_165ce82c1d3abec9c2df4e5a5bc" FOREIGN KEY ("pessoa_id") REFERENCES "pessoa"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "telefones" ADD CONSTRAINT "FK_8b7c9a07d784e288f1a0232cb6c" FOREIGN KEY ("pessoa_id") REFERENCES "pessoa"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "unidades" ADD CONSTRAINT "FK_e187bfe3639a17ebc5d1e2b6469" FOREIGN KEY ("pessoa_id") REFERENCES "pessoa"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "clientes" ADD CONSTRAINT "FK_92f90250bdb09058ada90ef5da7" FOREIGN KEY ("pessoa_id") REFERENCES "pessoa"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "clientes" DROP CONSTRAINT "FK_92f90250bdb09058ada90ef5da7"`,
    );
    await queryRunner.query(
      `ALTER TABLE "unidades" DROP CONSTRAINT "FK_e187bfe3639a17ebc5d1e2b6469"`,
    );
    await queryRunner.query(
      `ALTER TABLE "telefones" DROP CONSTRAINT "FK_8b7c9a07d784e288f1a0232cb6c"`,
    );
    await queryRunner.query(
      `ALTER TABLE "enderecos" DROP CONSTRAINT "FK_165ce82c1d3abec9c2df4e5a5bc"`,
    );
    await queryRunner.query(
      `ALTER TABLE "franquiadores" DROP CONSTRAINT "FK_041bb5658e66c141a4ea3605cc6"`,
    );
    await queryRunner.query(
      `ALTER TABLE "clientes" ALTER COLUMN "pessoa_id" DROP NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "clientes" ADD CONSTRAINT "FK_92f90250bdb09058ada90ef5da7" FOREIGN KEY ("pessoa_id") REFERENCES "pessoa"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "unidades" ALTER COLUMN "pessoa_id" DROP NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "unidades" ADD CONSTRAINT "FK_e187bfe3639a17ebc5d1e2b6469" FOREIGN KEY ("pessoa_id") REFERENCES "pessoa"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "telefones" ALTER COLUMN "pessoa_id" DROP NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "telefones" ADD CONSTRAINT "FK_8b7c9a07d784e288f1a0232cb6c" FOREIGN KEY ("pessoa_id") REFERENCES "pessoa"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "enderecos" ALTER COLUMN "pessoa_id" DROP NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "enderecos" ADD CONSTRAINT "FK_165ce82c1d3abec9c2df4e5a5bc" FOREIGN KEY ("pessoa_id") REFERENCES "pessoa"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "franquiadores" ALTER COLUMN "pessoa_id" DROP NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "franquiadores" ADD CONSTRAINT "FK_041bb5658e66c141a4ea3605cc6" FOREIGN KEY ("pessoa_id") REFERENCES "pessoa"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "franquiadores" DROP COLUMN "tipo_franquia"`,
    );
    await queryRunner.query(
      `DROP TYPE "public"."franquiadores_tipo_franquia_enum"`,
    );
  }
}
