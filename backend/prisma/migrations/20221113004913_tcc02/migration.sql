/*
  Warnings:

  - You are about to drop the `Rotina` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `tbacoes` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `tbcores` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `tbpapeis` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `tbpapelpermissoes` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `tbpermissoes` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `tbtabelaligacoes` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `tbusuariopapeis` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `tbusuariopermissoes` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "tbpapelpermissoes" DROP CONSTRAINT "tbpapelpermissoes_papel_id_fkey";

-- DropForeignKey
ALTER TABLE "tbpapelpermissoes" DROP CONSTRAINT "tbpapelpermissoes_permissao_id_fkey";

-- DropForeignKey
ALTER TABLE "tbtabelaligacoes" DROP CONSTRAINT "tbtabelaligacoes_status_id_fkey";

-- DropForeignKey
ALTER TABLE "tbtabelaligacoes" DROP CONSTRAINT "tbtabelaligacoes_tabela_destino_id_fkey";

-- DropForeignKey
ALTER TABLE "tbtabelaligacoes" DROP CONSTRAINT "tbtabelaligacoes_tabela_origem_id_fkey";

-- DropForeignKey
ALTER TABLE "tbusuariopapeis" DROP CONSTRAINT "tbusuariopapeis_papel_id_fkey";

-- DropForeignKey
ALTER TABLE "tbusuariopapeis" DROP CONSTRAINT "tbusuariopapeis_usuario_id_fkey";

-- DropForeignKey
ALTER TABLE "tbusuariopermissoes" DROP CONSTRAINT "tbusuariopermissoes_permissao_id_fkey";

-- DropForeignKey
ALTER TABLE "tbusuariopermissoes" DROP CONSTRAINT "tbusuariopermissoes_usuario_id_fkey";

-- DropTable
DROP TABLE "Rotina";

-- DropTable
DROP TABLE "tbacoes";

-- DropTable
DROP TABLE "tbcores";

-- DropTable
DROP TABLE "tbpapeis";

-- DropTable
DROP TABLE "tbpapelpermissoes";

-- DropTable
DROP TABLE "tbpermissoes";

-- DropTable
DROP TABLE "tbtabelaligacoes";

-- DropTable
DROP TABLE "tbusuariopapeis";

-- DropTable
DROP TABLE "tbusuariopermissoes";
