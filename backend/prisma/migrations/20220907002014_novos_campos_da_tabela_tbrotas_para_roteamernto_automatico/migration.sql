/*
  Warnings:

  - Added the required column `metodo` to the `tbrotas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nome` to the `tbrotas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `parametros` to the `tbrotas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rota` to the `tbrotas` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "tbrotas" ADD COLUMN     "metodo" TEXT NOT NULL,
ADD COLUMN     "nome" TEXT NOT NULL,
ADD COLUMN     "parametros" TEXT NOT NULL,
ADD COLUMN     "rota" TEXT NOT NULL;
