-- AlterTable
CREATE SEQUENCE "tbcolunas_id_seq";
ALTER TABLE "tbcolunas" ALTER COLUMN "id" SET DEFAULT nextval('tbcolunas_id_seq');
ALTER SEQUENCE "tbcolunas_id_seq" OWNED BY "tbcolunas"."id";
