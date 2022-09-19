/*
  Warnings:

  - You are about to alter the column `descricao` on the `tbacoes` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `metodo` on the `tbacoes` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `user` on the `tbbases` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `password` on the `tbbases` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `db_connection` on the `tbbases` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `host` on the `tbbases` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `url` on the `tbbases` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `ip` on the `tbbases` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `nome` on the `tbcolunas` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `pk` on the `tbcolunas` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `fk` on the `tbcolunas` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `descricao` on the `tbcores` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `cor` on the `tbcores` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `nome` on the `tbmenus` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `parametros` on the `tbmenus` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `rota` on the `tbmenus` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `icone` on the `tbmenus` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `component` on the `tbmenus` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `nome` on the `tbpapeis` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `descricao` on the `tbpapeis` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `nome` on the `tbpermissoes` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `descricao` on the `tbpermissoes` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `metodo` on the `tbrotas` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `nome` on the `tbrotas` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `parametros` on the `tbrotas` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `rota` on the `tbrotas` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `nome` on the `tbstatus` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `descricao` on the `tbstatus` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `nome` on the `tbtabelas` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `nome` on the `tbtipobases` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `icone` on the `tbtipobases` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `nome` on the `tbtipowebservices` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `sigla` on the `tbtipowebservices` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `descricao` on the `tbtipowebservices` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `name` on the `tbusuarios` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `username` on the `tbusuarios` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `email` on the `tbusuarios` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `password` on the `tbusuarios` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `remember_token` on the `tbusuarios` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `updated_at` on the `tbusuarios` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `nome` on the `tbwebservices` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `descricao` on the `tbwebservices` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.

*/
-- AlterTable
ALTER TABLE "tbacoes" ALTER COLUMN "descricao" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "metodo" SET DATA TYPE VARCHAR(255);

-- AlterTable
ALTER TABLE "tbbases" ALTER COLUMN "user" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "password" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "db_connection" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "host" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "url" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "ip" SET DATA TYPE VARCHAR(255);

-- AlterTable
ALTER TABLE "tbcolunas" ALTER COLUMN "nome" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "pk" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "fk" SET DATA TYPE VARCHAR(255);

-- AlterTable
ALTER TABLE "tbcores" ALTER COLUMN "descricao" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "cor" SET DATA TYPE VARCHAR(255);

-- AlterTable
ALTER TABLE "tbmenus" ALTER COLUMN "nome" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "parametros" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "rota" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "icone" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "component" SET DATA TYPE VARCHAR(255);

-- AlterTable
ALTER TABLE "tbpapeis" ALTER COLUMN "nome" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "descricao" SET DATA TYPE VARCHAR(255);

-- AlterTable
ALTER TABLE "tbpermissoes" ALTER COLUMN "nome" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "descricao" SET DATA TYPE VARCHAR(255);

-- AlterTable
ALTER TABLE "tbrotas" ALTER COLUMN "metodo" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "nome" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "parametros" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "rota" SET DATA TYPE VARCHAR(255);

-- AlterTable
ALTER TABLE "tbstatus" ALTER COLUMN "nome" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "descricao" SET DATA TYPE VARCHAR(255);

-- AlterTable
ALTER TABLE "tbtabelas" ALTER COLUMN "nome" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "scheme" SET DATA TYPE VARCHAR(255);

-- AlterTable
ALTER TABLE "tbtipobases" ALTER COLUMN "nome" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "icone" SET DATA TYPE VARCHAR(255);

-- AlterTable
ALTER TABLE "tbtipowebservices" ALTER COLUMN "nome" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "sigla" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "descricao" SET DATA TYPE VARCHAR(255);

-- AlterTable
ALTER TABLE "tbusuarios" ALTER COLUMN "name" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "username" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "email" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "password" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "remember_token" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "updated_at" SET DATA TYPE VARCHAR(255);

-- AlterTable
ALTER TABLE "tbwebservices" ALTER COLUMN "nome" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "descricao" SET DATA TYPE VARCHAR(255);
