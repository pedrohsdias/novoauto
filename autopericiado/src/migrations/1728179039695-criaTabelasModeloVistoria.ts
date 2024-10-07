import { MigrationInterface, QueryRunner } from 'typeorm';

export class CriaTabelasModeloVistoria1728179039695
  implements MigrationInterface
{
  name = 'CriaTabelasModeloVistoria1728179039695';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "opcoes_campo" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "nome" character varying NOT NULL, "alias" character varying NOT NULL, "eh_padrao" boolean NOT NULL DEFAULT false, "nivel_risco" "public"."opcoes_campo_nivel_risco_enum" NOT NULL DEFAULT 'padrao', "campo_id" integer, CONSTRAINT "PK_6f0ce964eb3dc0b8434cb53296f" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "tipos_bloco" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "nome" character varying NOT NULL, "descricao" character varying NOT NULL, CONSTRAINT "PK_d6058507848af1993e6f2f77ed9" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "modelos_vistoria" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "nome" character varying NOT NULL, CONSTRAINT "PK_1560c580b319f1ba971e419ea76" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "blocos" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "nome" character varying NOT NULL, "tipo_bloco_id" integer, CONSTRAINT "PK_bfc88d6483d37c14c8f2798af48" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "campos" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "nome" character varying NOT NULL, "alias" character varying NOT NULL, "qtd_selecionado" integer NOT NULL, "tipo_campo_id" integer, "bloco_id" integer, CONSTRAINT "PK_354272e954a46096a9392ee3c98" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "tipos_campo" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "nome" character varying NOT NULL, CONSTRAINT "PK_ebca98dd7aca08e95931bceb36a" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "modelos_vistoria_blocos" ("modelo_vistoria_id" integer NOT NULL, "bloco_id" integer NOT NULL, CONSTRAINT "PK_1f14fb8b7bc8b985a93da0c1e64" PRIMARY KEY ("modelo_vistoria_id", "bloco_id"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_d682bbc9da514fff1e2edf97e5" ON "modelos_vistoria_blocos" ("modelo_vistoria_id") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_c64f6fc6cac27cfa46cf4c67ff" ON "modelos_vistoria_blocos" ("bloco_id") `,
    );
    await queryRunner.query(
      `ALTER TABLE "opcoes_campo" ADD CONSTRAINT "FK_d9c5a157875d6ed3828e0679d72" FOREIGN KEY ("campo_id") REFERENCES "campos"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "blocos" ADD CONSTRAINT "FK_4fd850fb3f6b7d74f105d1debb9" FOREIGN KEY ("tipo_bloco_id") REFERENCES "tipos_bloco"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "campos" ADD CONSTRAINT "FK_1e1b87ed1bb61ae60b0b8814651" FOREIGN KEY ("tipo_campo_id") REFERENCES "tipos_campo"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "campos" ADD CONSTRAINT "FK_23717120b2d3871a4322c44c9c6" FOREIGN KEY ("bloco_id") REFERENCES "blocos"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "modelos_vistoria_blocos" ADD CONSTRAINT "FK_d682bbc9da514fff1e2edf97e5e" FOREIGN KEY ("modelo_vistoria_id") REFERENCES "modelos_vistoria"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE "modelos_vistoria_blocos" ADD CONSTRAINT "FK_c64f6fc6cac27cfa46cf4c67ff9" FOREIGN KEY ("bloco_id") REFERENCES "blocos"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "modelos_vistoria_blocos" DROP CONSTRAINT "FK_c64f6fc6cac27cfa46cf4c67ff9"`,
    );
    await queryRunner.query(
      `ALTER TABLE "modelos_vistoria_blocos" DROP CONSTRAINT "FK_d682bbc9da514fff1e2edf97e5e"`,
    );
    await queryRunner.query(
      `ALTER TABLE "campos" DROP CONSTRAINT "FK_23717120b2d3871a4322c44c9c6"`,
    );
    await queryRunner.query(
      `ALTER TABLE "campos" DROP CONSTRAINT "FK_1e1b87ed1bb61ae60b0b8814651"`,
    );
    await queryRunner.query(
      `ALTER TABLE "blocos" DROP CONSTRAINT "FK_4fd850fb3f6b7d74f105d1debb9"`,
    );
    await queryRunner.query(
      `ALTER TABLE "opcoes_campo" DROP CONSTRAINT "FK_d9c5a157875d6ed3828e0679d72"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_c64f6fc6cac27cfa46cf4c67ff"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_d682bbc9da514fff1e2edf97e5"`,
    );
    await queryRunner.query(`DROP TABLE "modelos_vistoria_blocos"`);
    await queryRunner.query(`DROP TABLE "tipos_campo"`);
    await queryRunner.query(`DROP TABLE "campos"`);
    await queryRunner.query(`DROP TABLE "blocos"`);
    await queryRunner.query(`DROP TABLE "modelos_vistoria"`);
    await queryRunner.query(`DROP TABLE "tipos_bloco"`);
    await queryRunner.query(`DROP TABLE "opcoes_campo"`);
  }
}
