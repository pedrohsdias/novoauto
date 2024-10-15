import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateAuth1728963402812 implements MigrationInterface {
  name = 'CreateAuth1728963402812';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TYPE "public"."usuarios_perfil_enum" AS ENUM('administrador sistema', 'administrador', 'administrador franquiador', 'gerente unidade', 'usuario')`,
    );
    await queryRunner.query(
      `CREATE TABLE "usuarios" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "nome" character varying(150) NOT NULL, "email" character varying(150) NOT NULL, "perfil" "public"."usuarios_perfil_enum" NOT NULL DEFAULT 'usuario', "senha" character varying NOT NULL, "franquiador_id" uuid, CONSTRAINT "UQ_446adfc18b35418aac32ae0b7b5" UNIQUE ("email"), CONSTRAINT "PK_d7281c63c176e152e4c531594a8" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "usuarios_unidades" ("usuario_id" uuid NOT NULL, "unidade_id" uuid NOT NULL, CONSTRAINT "PK_99cba7dcd75ae24a5fdc98f36b1" PRIMARY KEY ("usuario_id", "unidade_id"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_67de55d1de2d34ca62b69987bc" ON "usuarios_unidades" ("usuario_id") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_8ac6f868c62e9dbbc49c897760" ON "usuarios_unidades" ("unidade_id") `,
    );
    await queryRunner.query(
      `ALTER TABLE "ordem_servico" ADD "usuario_criador_id" uuid`,
    );
    await queryRunner.query(
      `ALTER TABLE "ordem_servico" ADD "usuario_finalizador_id" uuid`,
    );
    await queryRunner.query(
      `ALTER TABLE "ordem_servico" ADD CONSTRAINT "FK_35f35e36fa018d0c38c8c766097" FOREIGN KEY ("usuario_criador_id") REFERENCES "usuarios"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "ordem_servico" ADD CONSTRAINT "FK_6f7b678d4eacfc0ca89ec9d0eec" FOREIGN KEY ("usuario_finalizador_id") REFERENCES "usuarios"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "usuarios" ADD CONSTRAINT "FK_291975a5f0ca89cc849478742f0" FOREIGN KEY ("franquiador_id") REFERENCES "franquiadores"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "usuarios_unidades" ADD CONSTRAINT "FK_67de55d1de2d34ca62b69987bc9" FOREIGN KEY ("usuario_id") REFERENCES "usuarios"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE "usuarios_unidades" ADD CONSTRAINT "FK_8ac6f868c62e9dbbc49c8977609" FOREIGN KEY ("unidade_id") REFERENCES "unidades"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "usuarios_unidades" DROP CONSTRAINT "FK_8ac6f868c62e9dbbc49c8977609"`,
    );
    await queryRunner.query(
      `ALTER TABLE "usuarios_unidades" DROP CONSTRAINT "FK_67de55d1de2d34ca62b69987bc9"`,
    );
    await queryRunner.query(
      `ALTER TABLE "usuarios" DROP CONSTRAINT "FK_291975a5f0ca89cc849478742f0"`,
    );
    await queryRunner.query(
      `ALTER TABLE "ordem_servico" DROP CONSTRAINT "FK_6f7b678d4eacfc0ca89ec9d0eec"`,
    );
    await queryRunner.query(
      `ALTER TABLE "ordem_servico" DROP CONSTRAINT "FK_35f35e36fa018d0c38c8c766097"`,
    );
    await queryRunner.query(
      `ALTER TABLE "ordem_servico" DROP COLUMN "usuario_finalizador_id"`,
    );
    await queryRunner.query(
      `ALTER TABLE "ordem_servico" DROP COLUMN "usuario_criador_id"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_8ac6f868c62e9dbbc49c897760"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_67de55d1de2d34ca62b69987bc"`,
    );
    await queryRunner.query(`DROP TABLE "usuarios_unidades"`);
    await queryRunner.query(`DROP TABLE "usuarios"`);
    await queryRunner.query(`DROP TYPE "public"."usuarios_perfil_enum"`);
  }
}
