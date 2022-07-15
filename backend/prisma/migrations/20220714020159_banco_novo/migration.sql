-- CreateTable
CREATE TABLE "tbusuarios" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "email_verified" BOOLEAN NOT NULL DEFAULT false,
    "password" TEXT NOT NULL,
    "remember_token" TEXT,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TEXT,

    CONSTRAINT "tbusuarios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tbcores" (
    "id" SERIAL NOT NULL,
    "descricao" TEXT NOT NULL,
    "cor" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tbcores_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tbacoes" (
    "id" INTEGER NOT NULL,
    "descricao" TEXT NOT NULL,
    "metodo" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tbacoes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tbmenus" (
    "id" INTEGER NOT NULL,
    "descricao" TEXT NOT NULL,
    "icone" TEXT NOT NULL,
    "ordem" INTEGER NOT NULL,
    "desabilitado" BOOLEAN NOT NULL DEFAULT false,
    "pai_id" INTEGER NOT NULL,
    "acao_id" INTEGER NOT NULL,
    "papel" INTEGER NOT NULL,
    "permissao" INTEGER NOT NULL,

    CONSTRAINT "tbmenus_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tbpapeis" (
    "id" INTEGER NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tbpapeis_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tbpermissoes" (
    "id" INTEGER NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tbpermissoes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tbpapelpermissoes" (
    "papel_id" INTEGER NOT NULL,
    "permissao_id" INTEGER NOT NULL,

    CONSTRAINT "tbpapelpermissoes_pkey" PRIMARY KEY ("papel_id","permissao_id")
);

-- CreateTable
CREATE TABLE "tbusuariopermissoes" (
    "usuario_id" INTEGER NOT NULL,
    "permissao_id" INTEGER NOT NULL,

    CONSTRAINT "tbusuariopermissoes_pkey" PRIMARY KEY ("usuario_id","permissao_id")
);

-- CreateTable
CREATE TABLE "tbusuariopapeis" (
    "usuario_id" INTEGER NOT NULL,
    "papel_id" INTEGER NOT NULL,

    CONSTRAINT "tbusuariopapeis_pkey" PRIMARY KEY ("usuario_id","papel_id")
);

-- CreateTable
CREATE TABLE "tbstatus" (
    "id" INTEGER NOT NULL,
    "descricao" TEXT NOT NULL,

    CONSTRAINT "tbstatus_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tbtipowebservices" (
    "id" INTEGER NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "status" INTEGER NOT NULL,

    CONSTRAINT "tbtipowebservices_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tbwebservices" (
    "id" INTEGER NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "prover" BOOLEAN NOT NULL,
    "consumir" BOOLEAN NOT NULL,
    "status" INTEGER NOT NULL,

    CONSTRAINT "tbwebservices_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tbtipobases" (
    "id" INTEGER NOT NULL,

    CONSTRAINT "tbtipobases_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tbbases" (
    "id" INTEGER NOT NULL,

    CONSTRAINT "tbbases_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tbrotas" (
    "id" INTEGER NOT NULL,

    CONSTRAINT "tbrotas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tbtabelas" (
    "id" INTEGER NOT NULL,

    CONSTRAINT "tbtabelas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tbcolunas" (
    "id" INTEGER NOT NULL,

    CONSTRAINT "tbcolunas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tbtabelaligacoes" (
    "id" INTEGER NOT NULL,

    CONSTRAINT "tbtabelaligacoes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "tbusuarios_username_key" ON "tbusuarios"("username");

-- CreateIndex
CREATE UNIQUE INDEX "tbusuarios_email_key" ON "tbusuarios"("email");

-- AddForeignKey
ALTER TABLE "tbpapelpermissoes" ADD CONSTRAINT "tbpapelpermissoes_papel_id_fkey" FOREIGN KEY ("papel_id") REFERENCES "tbpapeis"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tbpapelpermissoes" ADD CONSTRAINT "tbpapelpermissoes_permissao_id_fkey" FOREIGN KEY ("permissao_id") REFERENCES "tbpermissoes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tbusuariopermissoes" ADD CONSTRAINT "tbusuariopermissoes_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "tbusuarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tbusuariopermissoes" ADD CONSTRAINT "tbusuariopermissoes_permissao_id_fkey" FOREIGN KEY ("permissao_id") REFERENCES "tbpermissoes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tbusuariopapeis" ADD CONSTRAINT "tbusuariopapeis_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "tbusuarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tbusuariopapeis" ADD CONSTRAINT "tbusuariopapeis_papel_id_fkey" FOREIGN KEY ("papel_id") REFERENCES "tbpapeis"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
