import { MigrationInterface, QueryRunner } from 'typeorm';

export class CriaTabelasIniciais1728797647649 implements MigrationInterface {
  name = 'CriaTabelasIniciais1728797647649';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "franquiadores" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "apelido" character varying NOT NULL, "link_logo" character varying NOT NULL, "termo_data_aceite" TIMESTAMP NOT NULL, "termo_usuario_id" character varying NOT NULL, "pessoa_id" integer, CONSTRAINT "PK_8795ac9427beafb83090ceefbca" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "estados" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "nome" character varying NOT NULL, "uf" character varying NOT NULL, CONSTRAINT "PK_3d9a9f2658d5086012f27924d30" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "municipios" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "nome" character varying NOT NULL, "estado_id" integer, CONSTRAINT "PK_10d04b4b4e39ba40240b61e919d" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "tipos_endereco" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "descricao" character varying NOT NULL, CONSTRAINT "PK_73f95ea7e39f8657ea38afe9d0b" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "enderecos" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "logradouro" character varying NOT NULL, "numero" character varying NOT NULL, "complemento" character varying NOT NULL, "cep" character varying NOT NULL, "bairro" character varying NOT NULL, "pessoa_id" integer, "municipio_id" integer, "tipo_endereco_id" integer, CONSTRAINT "PK_208b05002dcdf7bfbad378dcac1" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "tipos_telefone" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "descricao" character varying NOT NULL, CONSTRAINT "PK_05e2b75fa8af46587a52f6bc7a8" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "telefones" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "numero" character varying NOT NULL, "pessoa_id" integer, "tipo_telefone_id" integer, CONSTRAINT "PK_fa0a7002d74f18ec1a13ca9a4f2" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TYPE "public"."pessoa_tipo_documento_enum" AS ENUM('PJ', 'PF')`,
    );
    await queryRunner.query(
      `CREATE TABLE "pessoa" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "apelido" character varying NOT NULL, "nome_formal" character varying NOT NULL, "documento" character varying NOT NULL, "tipo_documento" "public"."pessoa_tipo_documento_enum" NOT NULL DEFAULT 'PJ', CONSTRAINT "PK_bb879ac36994545a5a917a09ba5" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TYPE "public"."opcoes_campo_nivel_risco_enum" AS ENUM('padrao', 'sucesso', 'aviso', 'erro')`,
    );
    await queryRunner.query(
      `CREATE TABLE "opcoes_campo" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "nome" character varying NOT NULL, "alias" character varying NOT NULL, "coordenada_x_y" character varying NOT NULL, "eh_padrao" boolean NOT NULL DEFAULT false, "nivel_risco" "public"."opcoes_campo_nivel_risco_enum" NOT NULL DEFAULT 'padrao', "campo_id" integer, CONSTRAINT "PK_6f0ce964eb3dc0b8434cb53296f" PRIMARY KEY ("id")); COMMENT ON COLUMN "opcoes_campo"."coordenada_x_y" IS 'Campo preenchido quando bloco tipo imagem, indicando onde marcar na imagem'; COMMENT ON COLUMN "opcoes_campo"."nivel_risco" IS 'Campo indica um coloração diferente para a opção'`,
    );
    await queryRunner.query(
      `CREATE TYPE "public"."campos_tipo_campo_enum" AS ENUM('input', 'monetario', 'data', 'data hora', 'texto', 'radiobutton', 'sim ou não', 'select', 'select multivalorado', 'combobox')`,
    );
    await queryRunner.query(
      `CREATE TABLE "campos" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "nome" character varying NOT NULL, "alias" character varying NOT NULL, "tipo_campo" "public"."campos_tipo_campo_enum" NOT NULL DEFAULT 'input', "qtd_selecionado" integer NOT NULL DEFAULT '0', "tem_observacao" boolean NOT NULL, "bloco_id" integer, CONSTRAINT "PK_354272e954a46096a9392ee3c98" PRIMARY KEY ("id")); COMMENT ON COLUMN "campos"."qtd_selecionado" IS '0 = campo opcional, 1 = campo obrigatorio, 2=campo multivalorado'; COMMENT ON COLUMN "campos"."tem_observacao" IS 'Caso alem do valor o campo permita observação, tipo item de avaliacao'`,
    );
    await queryRunner.query(
      `CREATE TYPE "public"."blocos_tipo_bloco_enum" AS ENUM('padrao', 'imagem', 'upload')`,
    );
    await queryRunner.query(
      `CREATE TABLE "blocos" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "nome" character varying NOT NULL, "fontAwesomeIcon" character varying NOT NULL, "imagem_caminho" character varying NOT NULL, "tipo_bloco" "public"."blocos_tipo_bloco_enum" NOT NULL DEFAULT 'padrao', CONSTRAINT "PK_bfc88d6483d37c14c8f2798af48" PRIMARY KEY ("id")); COMMENT ON COLUMN "blocos"."imagem_caminho" IS 'Somente preenchido quando tipo bloco = imagem'`,
    );
    await queryRunner.query(
      `CREATE TYPE "public"."ordem_servico_tipo_dado_consultado_enum" AS ENUM('CHASSI', 'PLACA')`,
    );
    await queryRunner.query(
      `CREATE TYPE "public"."ordem_servico_status_enum" AS ENUM('AGENDADO', 'AGENDAMENTO EXPIRADO', 'EM ANDAMENTO', 'FINALIZADO', 'CANCELADO', 'FRUSTRADO')`,
    );
    await queryRunner.query(
      `CREATE TYPE "public"."ordem_servico_parecer_vistoria_enum" AS ENUM('APROVADO', 'APROVADO COM APONTAMENTOS', 'REPROVADO', 'FINALIZAR SEM PARECER')`,
    );
    await queryRunner.query(
      `CREATE TYPE "public"."ordem_servico_tipo_os_enum" AS ENUM('CONSULTA', 'VISTORIA')`,
    );
    await queryRunner.query(
      `CREATE TABLE "ordem_servico" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "sequenciador" character varying NOT NULL, "modelo_vistoria_snapshot" jsonb NOT NULL, "tipo_dado_consultado" "public"."ordem_servico_tipo_dado_consultado_enum" NOT NULL DEFAULT 'PLACA', "dado_consultado" character varying NOT NULL, "comentario" character varying NOT NULL, "custo" character varying NOT NULL, "preco" character varying NOT NULL, "status" "public"."ordem_servico_status_enum" NOT NULL DEFAULT 'AGENDADO', "parecer_vistoria" "public"."ordem_servico_parecer_vistoria_enum" NOT NULL DEFAULT 'FINALIZAR SEM PARECER', "tipo_os" "public"."ordem_servico_tipo_os_enum" NOT NULL DEFAULT 'VISTORIA', "custo_zerado" boolean NOT NULL DEFAULT false, "cliente_id" integer, "unidade_id" integer, "modelo_vistoria_id" integer, CONSTRAINT "PK_dccd3809fd45d6946c6a999318c" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "modelos_vistoria" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "nome" character varying NOT NULL, CONSTRAINT "PK_1560c580b319f1ba971e419ea76" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TYPE "public"."servicos_tipo_servico_enum" AS ENUM('VISTORIA', 'CONSULTA')`,
    );
    await queryRunner.query(
      `CREATE TABLE "servicos" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "nome" character varying NOT NULL, "tipo_servico" "public"."servicos_tipo_servico_enum" NOT NULL DEFAULT 'VISTORIA', "custo" integer NOT NULL, "preco" integer NOT NULL, "consulta" integer NOT NULL, "unidade_id" integer, CONSTRAINT "PK_91c99670ea2115d2028a48c5e0e" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "unidades" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "apelido" character varying NOT NULL, "franquiador_id" integer, "pessoa_id" integer, CONSTRAINT "PK_3e728a664b48bbd90a355065233" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "clientes" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "unidade_id" integer, "pessoa_id" integer, CONSTRAINT "PK_d76bf3571d906e4e86470482c08" PRIMARY KEY ("id"))`,
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
      `CREATE TABLE "servicos_modelos_vistoria" ("modelo_vistoria_id" integer NOT NULL, "servico_id" integer NOT NULL, CONSTRAINT "PK_e745edc2397129e72a4c080981d" PRIMARY KEY ("modelo_vistoria_id", "servico_id"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_687afc5e7e00d8fe002b318744" ON "servicos_modelos_vistoria" ("modelo_vistoria_id") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_25ef5d27079674fe1028ca93cf" ON "servicos_modelos_vistoria" ("servico_id") `,
    );
    await queryRunner.query(
      `ALTER TABLE "franquiadores" ADD CONSTRAINT "FK_041bb5658e66c141a4ea3605cc6" FOREIGN KEY ("pessoa_id") REFERENCES "pessoa"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "municipios" ADD CONSTRAINT "FK_0314c2f08cd4f988f28a6c2d4f5" FOREIGN KEY ("estado_id") REFERENCES "estados"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "enderecos" ADD CONSTRAINT "FK_165ce82c1d3abec9c2df4e5a5bc" FOREIGN KEY ("pessoa_id") REFERENCES "pessoa"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "enderecos" ADD CONSTRAINT "FK_8f662dafd86675aa10a83d89372" FOREIGN KEY ("municipio_id") REFERENCES "municipios"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "enderecos" ADD CONSTRAINT "FK_d3fba5fa9f15e75c4f2cc77962c" FOREIGN KEY ("tipo_endereco_id") REFERENCES "tipos_endereco"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "telefones" ADD CONSTRAINT "FK_8b7c9a07d784e288f1a0232cb6c" FOREIGN KEY ("pessoa_id") REFERENCES "pessoa"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "telefones" ADD CONSTRAINT "FK_9b1d4089c356d179c4f20114070" FOREIGN KEY ("tipo_telefone_id") REFERENCES "tipos_telefone"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "opcoes_campo" ADD CONSTRAINT "FK_d9c5a157875d6ed3828e0679d72" FOREIGN KEY ("campo_id") REFERENCES "campos"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "campos" ADD CONSTRAINT "FK_23717120b2d3871a4322c44c9c6" FOREIGN KEY ("bloco_id") REFERENCES "blocos"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "ordem_servico" ADD CONSTRAINT "FK_1e6fc9a2df0fe9c992559beb41f" FOREIGN KEY ("cliente_id") REFERENCES "clientes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "ordem_servico" ADD CONSTRAINT "FK_78c10565ea99de86693d7bbee7d" FOREIGN KEY ("unidade_id") REFERENCES "unidades"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "ordem_servico" ADD CONSTRAINT "FK_4691a76604789cce20768ab8f51" FOREIGN KEY ("modelo_vistoria_id") REFERENCES "modelos_vistoria"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "servicos" ADD CONSTRAINT "FK_a1cd510dfdc94e1920396bdb2c9" FOREIGN KEY ("unidade_id") REFERENCES "unidades"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "unidades" ADD CONSTRAINT "FK_569afaad4bba16116b40f1f01d2" FOREIGN KEY ("franquiador_id") REFERENCES "franquiadores"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "unidades" ADD CONSTRAINT "FK_e187bfe3639a17ebc5d1e2b6469" FOREIGN KEY ("pessoa_id") REFERENCES "pessoa"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "clientes" ADD CONSTRAINT "FK_af779bea41976571155e840308d" FOREIGN KEY ("unidade_id") REFERENCES "unidades"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "clientes" ADD CONSTRAINT "FK_92f90250bdb09058ada90ef5da7" FOREIGN KEY ("pessoa_id") REFERENCES "pessoa"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "modelos_vistoria_blocos" ADD CONSTRAINT "FK_d682bbc9da514fff1e2edf97e5e" FOREIGN KEY ("modelo_vistoria_id") REFERENCES "modelos_vistoria"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE "modelos_vistoria_blocos" ADD CONSTRAINT "FK_c64f6fc6cac27cfa46cf4c67ff9" FOREIGN KEY ("bloco_id") REFERENCES "blocos"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "servicos_modelos_vistoria" ADD CONSTRAINT "FK_687afc5e7e00d8fe002b3187443" FOREIGN KEY ("modelo_vistoria_id") REFERENCES "servicos"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE "servicos_modelos_vistoria" ADD CONSTRAINT "FK_25ef5d27079674fe1028ca93cfb" FOREIGN KEY ("servico_id") REFERENCES "modelos_vistoria"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "servicos_modelos_vistoria" DROP CONSTRAINT "FK_25ef5d27079674fe1028ca93cfb"`,
    );
    await queryRunner.query(
      `ALTER TABLE "servicos_modelos_vistoria" DROP CONSTRAINT "FK_687afc5e7e00d8fe002b3187443"`,
    );
    await queryRunner.query(
      `ALTER TABLE "modelos_vistoria_blocos" DROP CONSTRAINT "FK_c64f6fc6cac27cfa46cf4c67ff9"`,
    );
    await queryRunner.query(
      `ALTER TABLE "modelos_vistoria_blocos" DROP CONSTRAINT "FK_d682bbc9da514fff1e2edf97e5e"`,
    );
    await queryRunner.query(
      `ALTER TABLE "clientes" DROP CONSTRAINT "FK_92f90250bdb09058ada90ef5da7"`,
    );
    await queryRunner.query(
      `ALTER TABLE "clientes" DROP CONSTRAINT "FK_af779bea41976571155e840308d"`,
    );
    await queryRunner.query(
      `ALTER TABLE "unidades" DROP CONSTRAINT "FK_e187bfe3639a17ebc5d1e2b6469"`,
    );
    await queryRunner.query(
      `ALTER TABLE "unidades" DROP CONSTRAINT "FK_569afaad4bba16116b40f1f01d2"`,
    );
    await queryRunner.query(
      `ALTER TABLE "servicos" DROP CONSTRAINT "FK_a1cd510dfdc94e1920396bdb2c9"`,
    );
    await queryRunner.query(
      `ALTER TABLE "ordem_servico" DROP CONSTRAINT "FK_4691a76604789cce20768ab8f51"`,
    );
    await queryRunner.query(
      `ALTER TABLE "ordem_servico" DROP CONSTRAINT "FK_78c10565ea99de86693d7bbee7d"`,
    );
    await queryRunner.query(
      `ALTER TABLE "ordem_servico" DROP CONSTRAINT "FK_1e6fc9a2df0fe9c992559beb41f"`,
    );
    await queryRunner.query(
      `ALTER TABLE "campos" DROP CONSTRAINT "FK_23717120b2d3871a4322c44c9c6"`,
    );
    await queryRunner.query(
      `ALTER TABLE "opcoes_campo" DROP CONSTRAINT "FK_d9c5a157875d6ed3828e0679d72"`,
    );
    await queryRunner.query(
      `ALTER TABLE "telefones" DROP CONSTRAINT "FK_9b1d4089c356d179c4f20114070"`,
    );
    await queryRunner.query(
      `ALTER TABLE "telefones" DROP CONSTRAINT "FK_8b7c9a07d784e288f1a0232cb6c"`,
    );
    await queryRunner.query(
      `ALTER TABLE "enderecos" DROP CONSTRAINT "FK_d3fba5fa9f15e75c4f2cc77962c"`,
    );
    await queryRunner.query(
      `ALTER TABLE "enderecos" DROP CONSTRAINT "FK_8f662dafd86675aa10a83d89372"`,
    );
    await queryRunner.query(
      `ALTER TABLE "enderecos" DROP CONSTRAINT "FK_165ce82c1d3abec9c2df4e5a5bc"`,
    );
    await queryRunner.query(
      `ALTER TABLE "municipios" DROP CONSTRAINT "FK_0314c2f08cd4f988f28a6c2d4f5"`,
    );
    await queryRunner.query(
      `ALTER TABLE "franquiadores" DROP CONSTRAINT "FK_041bb5658e66c141a4ea3605cc6"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_25ef5d27079674fe1028ca93cf"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_687afc5e7e00d8fe002b318744"`,
    );
    await queryRunner.query(`DROP TABLE "servicos_modelos_vistoria"`);
    await queryRunner.query(
      `DROP INDEX "public"."IDX_c64f6fc6cac27cfa46cf4c67ff"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_d682bbc9da514fff1e2edf97e5"`,
    );
    await queryRunner.query(`DROP TABLE "modelos_vistoria_blocos"`);
    await queryRunner.query(`DROP TABLE "clientes"`);
    await queryRunner.query(`DROP TABLE "unidades"`);
    await queryRunner.query(`DROP TABLE "servicos"`);
    await queryRunner.query(`DROP TYPE "public"."servicos_tipo_servico_enum"`);
    await queryRunner.query(`DROP TABLE "modelos_vistoria"`);
    await queryRunner.query(`DROP TABLE "ordem_servico"`);
    await queryRunner.query(`DROP TYPE "public"."ordem_servico_tipo_os_enum"`);
    await queryRunner.query(
      `DROP TYPE "public"."ordem_servico_parecer_vistoria_enum"`,
    );
    await queryRunner.query(`DROP TYPE "public"."ordem_servico_status_enum"`);
    await queryRunner.query(
      `DROP TYPE "public"."ordem_servico_tipo_dado_consultado_enum"`,
    );
    await queryRunner.query(`DROP TABLE "blocos"`);
    await queryRunner.query(`DROP TYPE "public"."blocos_tipo_bloco_enum"`);
    await queryRunner.query(`DROP TABLE "campos"`);
    await queryRunner.query(`DROP TYPE "public"."campos_tipo_campo_enum"`);
    await queryRunner.query(`DROP TABLE "opcoes_campo"`);
    await queryRunner.query(
      `DROP TYPE "public"."opcoes_campo_nivel_risco_enum"`,
    );
    await queryRunner.query(`DROP TABLE "pessoa"`);
    await queryRunner.query(`DROP TYPE "public"."pessoa_tipo_documento_enum"`);
    await queryRunner.query(`DROP TABLE "telefones"`);
    await queryRunner.query(`DROP TABLE "tipos_telefone"`);
    await queryRunner.query(`DROP TABLE "enderecos"`);
    await queryRunner.query(`DROP TABLE "tipos_endereco"`);
    await queryRunner.query(`DROP TABLE "municipios"`);
    await queryRunner.query(`DROP TABLE "estados"`);
    await queryRunner.query(`DROP TABLE "franquiadores"`);
  }
}
