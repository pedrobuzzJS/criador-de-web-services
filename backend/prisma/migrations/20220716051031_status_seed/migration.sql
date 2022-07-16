/*
  Warnings:

  - Added the required column `nome` to the `tbstatus` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
CREATE SEQUENCE "tbstatus_id_seq";
ALTER TABLE "tbstatus" ADD COLUMN     "nome" TEXT NOT NULL,
ALTER COLUMN "id" SET DEFAULT nextval('tbstatus_id_seq');
ALTER SEQUENCE "tbstatus_id_seq" OWNED BY "tbstatus"."id";
