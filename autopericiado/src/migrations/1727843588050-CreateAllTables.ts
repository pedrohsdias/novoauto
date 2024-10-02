import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateAllTables1727843588050 implements MigrationInterface {
    name = 'CreateAllTables1727843588050'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "tipos_bloco" ("id" SERIAL NOT NULL, "nome" character varying NOT NULL, "descricao" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, CONSTRAINT "PK_d6058507848af1993e6f2f77ed9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "blocos" ("id" SERIAL NOT NULL, "nome" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "tiposBlocoId" integer, CONSTRAINT "PK_bfc88d6483d37c14c8f2798af48" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "modelos_laudo_blocos" ("id" SERIAL NOT NULL, "modeloLaudoId" integer, "blocosId" integer, CONSTRAINT "PK_37be75c1c9610f70a5272619fef" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "modelos_laudo" ("id" SERIAL NOT NULL, "nome" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, CONSTRAINT "PK_f7806b3434de1d07effcbc299e7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."opcoes_campo_risco_enum" AS ENUM('padrao', 'sucesso', 'aviso', 'erro')`);
        await queryRunner.query(`CREATE TABLE "opcoes_campo" ("id" SERIAL NOT NULL, "nome" character varying NOT NULL, "alias" character varying NOT NULL, "eh_padrao" boolean NOT NULL DEFAULT false, "risco" "public"."opcoes_campo_risco_enum" NOT NULL DEFAULT 'padrao', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "campoId" integer, CONSTRAINT "PK_6f0ce964eb3dc0b8434cb53296f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "campos" ("id" SERIAL NOT NULL, "nome" character varying NOT NULL, "alias" character varying NOT NULL, "qtd_selecionado" integer NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "tiposCampoId" integer, "modeloLaudoId" integer, CONSTRAINT "PK_354272e954a46096a9392ee3c98" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "tipos_campo" ("id" SERIAL NOT NULL, "nome" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, CONSTRAINT "PK_ebca98dd7aca08e95931bceb36a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "blocos" ADD CONSTRAINT "FK_ccb548c6324f034aa96fc799c3e" FOREIGN KEY ("tiposBlocoId") REFERENCES "tipos_bloco"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "modelos_laudo_blocos" ADD CONSTRAINT "FK_883e6b11a2fa20f6482f2dbc526" FOREIGN KEY ("modeloLaudoId") REFERENCES "modelos_laudo"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "modelos_laudo_blocos" ADD CONSTRAINT "FK_bf5b929645f0b25ff92865bcc2c" FOREIGN KEY ("blocosId") REFERENCES "blocos"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "opcoes_campo" ADD CONSTRAINT "FK_3b10c139ba3f9e150befa46a3c3" FOREIGN KEY ("campoId") REFERENCES "campos"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "campos" ADD CONSTRAINT "FK_3dc7367656851aae2777a60ddf2" FOREIGN KEY ("tiposCampoId") REFERENCES "tipos_campo"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "campos" ADD CONSTRAINT "FK_e5026bc0eada8a9a3ec51699ce4" FOREIGN KEY ("modeloLaudoId") REFERENCES "modelos_laudo"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "campos" DROP CONSTRAINT "FK_e5026bc0eada8a9a3ec51699ce4"`);
        await queryRunner.query(`ALTER TABLE "campos" DROP CONSTRAINT "FK_3dc7367656851aae2777a60ddf2"`);
        await queryRunner.query(`ALTER TABLE "opcoes_campo" DROP CONSTRAINT "FK_3b10c139ba3f9e150befa46a3c3"`);
        await queryRunner.query(`ALTER TABLE "modelos_laudo_blocos" DROP CONSTRAINT "FK_bf5b929645f0b25ff92865bcc2c"`);
        await queryRunner.query(`ALTER TABLE "modelos_laudo_blocos" DROP CONSTRAINT "FK_883e6b11a2fa20f6482f2dbc526"`);
        await queryRunner.query(`ALTER TABLE "blocos" DROP CONSTRAINT "FK_ccb548c6324f034aa96fc799c3e"`);
        await queryRunner.query(`DROP TABLE "tipos_campo"`);
        await queryRunner.query(`DROP TABLE "campos"`);
        await queryRunner.query(`DROP TABLE "opcoes_campo"`);
        await queryRunner.query(`DROP TYPE "public"."opcoes_campo_risco_enum"`);
        await queryRunner.query(`DROP TABLE "modelos_laudo"`);
        await queryRunner.query(`DROP TABLE "modelos_laudo_blocos"`);
        await queryRunner.query(`DROP TABLE "blocos"`);
        await queryRunner.query(`DROP TABLE "tipos_bloco"`);
    }

}
