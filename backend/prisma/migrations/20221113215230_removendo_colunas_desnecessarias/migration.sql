/*
  Warnings:

  - You are about to drop the column `permissao` on the `tbbases` table. All the data in the column will be lost.
  - You are about to drop the column `permissao` on the `tbcolunas` table. All the data in the column will be lost.
  - You are about to drop the column `papel` on the `tbmenus` table. All the data in the column will be lost.
  - You are about to drop the column `permissao` on the `tbmenus` table. All the data in the column will be lost.
  - You are about to drop the column `permissao` on the `tbtabelas` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "tbbases" DROP COLUMN "permissao";

-- AlterTable
ALTER TABLE "tbcolunas" DROP COLUMN "permissao";

-- AlterTable
ALTER TABLE "tbmenus" DROP COLUMN "papel",
DROP COLUMN "permissao";

-- AlterTable
ALTER TABLE "tbtabelas" DROP COLUMN "permissao";
