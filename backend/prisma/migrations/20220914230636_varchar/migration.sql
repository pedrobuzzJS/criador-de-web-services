/*
  Warnings:

  - You are about to alter the column `scheme` on the `tbtabelas` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(150)`.

*/
-- AlterTable
ALTER TABLE "tbtabelas" ALTER COLUMN "scheme" SET DATA TYPE VARCHAR(150);
