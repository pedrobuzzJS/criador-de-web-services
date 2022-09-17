/*
  Warnings:

  - You are about to alter the column `nome` on the `tbbases` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.

*/
-- AlterTable
ALTER TABLE "tbbases" ALTER COLUMN "nome" SET DATA TYPE VARCHAR(255);
