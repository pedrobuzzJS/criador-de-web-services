-- CreateTable
CREATE TABLE "tbusuarios" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "username" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "email_verified" BOOLEAN NOT NULL DEFAULT false,
    "password" VARCHAR(255) NOT NULL,
    "remember_token" VARCHAR(255),
    "status_id" INTEGER,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" VARCHAR(255),

    CONSTRAINT "tbusuarios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tbcores" (
    "id" SERIAL NOT NULL,
    "descricao" VARCHAR(255) NOT NULL,
    "cor" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tbcores_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tbacoes" (
    "id" INTEGER NOT NULL,
    "descricao" VARCHAR(255) NOT NULL,
    "metodo" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tbacoes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tbmenus" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(255) NOT NULL,
    "parametros" VARCHAR(255),
    "rota" VARCHAR(255),
    "icone" VARCHAR(255) NOT NULL,
    "pai_id" INTEGER,
    "component" VARCHAR(255),
    "possuifilhos" BOOLEAN NOT NULL DEFAULT false,
    "ordem" INTEGER,
    "desabilitado" BOOLEAN NOT NULL DEFAULT false,
    "papel" INTEGER,
    "permissao" INTEGER,
    "status_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "tbmenus_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tbpapeis" (
    "id" INTEGER NOT NULL,
    "nome" VARCHAR(255) NOT NULL,
    "descricao" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tbpapeis_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tbpermissoes" (
    "id" INTEGER NOT NULL,
    "nome" VARCHAR(255) NOT NULL,
    "descricao" VARCHAR(255) NOT NULL,
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
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(255) NOT NULL,
    "descricao" VARCHAR(255) NOT NULL,

    CONSTRAINT "tbstatus_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tbtipowebservices" (
    "id" INTEGER NOT NULL,
    "nome" VARCHAR(255) NOT NULL,
    "sigla" VARCHAR(255) NOT NULL,
    "descricao" VARCHAR(255) NOT NULL,
    "status_id" INTEGER,

    CONSTRAINT "tbtipowebservices_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tbwebservices" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(255) NOT NULL,
    "descricao" VARCHAR(255) NOT NULL,
    "prover" BOOLEAN NOT NULL,
    "consumir" BOOLEAN NOT NULL,
    "varsao" DOUBLE PRECISION NOT NULL,
    "status_id" INTEGER,

    CONSTRAINT "tbwebservices_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tbwebserviceobj" (
    "id" SERIAL NOT NULL,
    "obj" VARCHAR(2500) NOT NULL,
    "sql" VARCHAR(2500) NOT NULL,
    "webservice_id" INTEGER NOT NULL,
    "versao" INTEGER,
    "status_id" INTEGER,
    "table_id" INTEGER NOT NULL,

    CONSTRAINT "tbwebserviceobj_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tbwebserviceroutes" (
    "id" SERIAL NOT NULL,
    "webservice_id" INTEGER NOT NULL,
    "route" VARCHAR(500) NOT NULL,
    "werbservoceobj_id" INTEGER NOT NULL,

    CONSTRAINT "tbwebserviceroutes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tbtipobases" (
    "id" INTEGER NOT NULL,
    "nome" VARCHAR(255) NOT NULL,
    "icone" VARCHAR(255) NOT NULL,
    "status_id" INTEGER,

    CONSTRAINT "tbtipobases_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tbbases" (
    "id" INTEGER NOT NULL,
    "nome" VARCHAR(255) NOT NULL,
    "user" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "db_connection" VARCHAR(255) NOT NULL,
    "host" VARCHAR(255) NOT NULL,
    "emp" INTEGER NOT NULL,
    "fil" INTEGER NOT NULL,
    "tipobase_id" INTEGER NOT NULL,
    "url" VARCHAR(255) NOT NULL,
    "ip" VARCHAR(255) NOT NULL,
    "permissao" INTEGER NOT NULL,
    "status_id" INTEGER,

    CONSTRAINT "tbbases_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tbrotas" (
    "id" INTEGER NOT NULL,
    "nome" VARCHAR(255) NOT NULL,
    "rota" VARCHAR(255) NOT NULL,
    "parametros" VARCHAR(255) NOT NULL,
    "metodo" VARCHAR(255) NOT NULL,
    "status_id" INTEGER NOT NULL,

    CONSTRAINT "tbrotas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tbtabelas" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(255) NOT NULL,
    "scheme" VARCHAR(255) NOT NULL,
    "base_id" INTEGER,
    "permissao" INTEGER,
    "status_id" INTEGER,

    CONSTRAINT "tbtabelas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tbcolunas" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(255) NOT NULL,
    "tipo" VARCHAR(255),
    "posicao" INTEGER,
    "nulo" VARCHAR(255),
    "char_max" INTEGER,
    "is_identity" VARCHAR(255),
    "is_self_referencing" VARCHAR(255),
    "is_updatable" VARCHAR(255),
    "pk" VARCHAR(255),
    "fk" VARCHAR(255),
    "tabela_id" INTEGER NOT NULL,
    "permissao" INTEGER,
    "status_id" INTEGER,

    CONSTRAINT "tbcolunas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tbtabelaligacoes" (
    "tabela_origem_id" INTEGER NOT NULL,
    "coluna_origem_id" INTEGER NOT NULL,
    "tabela_destino_id" INTEGER NOT NULL,
    "coluna_destino_id" INTEGER NOT NULL,
    "status_id" INTEGER,

    CONSTRAINT "tbtabelaligacoes_pkey" PRIMARY KEY ("tabela_origem_id","coluna_origem_id","tabela_destino_id","coluna_destino_id")
);

-- CreateTable
CREATE TABLE "Rotina" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "descricao" VARCHAR(500) NOT NULL,
    "acao" VARCHAR(500) NOT NULL,
    "metodo" VARCHAR(8) NOT NULL,

    CONSTRAINT "Rotina_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "tbusuarios_username_key" ON "tbusuarios"("username");

-- CreateIndex
CREATE UNIQUE INDEX "tbusuarios_email_key" ON "tbusuarios"("email");

-- AddForeignKey
ALTER TABLE "tbusuarios" ADD CONSTRAINT "tbusuarios_status_id_fkey" FOREIGN KEY ("status_id") REFERENCES "tbstatus"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tbmenus" ADD CONSTRAINT "tbmenus_status_id_fkey" FOREIGN KEY ("status_id") REFERENCES "tbstatus"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

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

-- AddForeignKey
ALTER TABLE "tbtipowebservices" ADD CONSTRAINT "tbtipowebservices_status_id_fkey" FOREIGN KEY ("status_id") REFERENCES "tbstatus"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tbwebservices" ADD CONSTRAINT "tbwebservices_status_id_fkey" FOREIGN KEY ("status_id") REFERENCES "tbstatus"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tbwebserviceobj" ADD CONSTRAINT "tbwebserviceobj_status_id_fkey" FOREIGN KEY ("status_id") REFERENCES "tbstatus"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tbwebserviceobj" ADD CONSTRAINT "tbwebserviceobj_webservice_id_fkey" FOREIGN KEY ("webservice_id") REFERENCES "tbwebservices"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tbwebserviceobj" ADD CONSTRAINT "tbwebserviceobj_table_id_fkey" FOREIGN KEY ("table_id") REFERENCES "tbtabelas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tbwebserviceroutes" ADD CONSTRAINT "tbwebserviceroutes_webservice_id_fkey" FOREIGN KEY ("webservice_id") REFERENCES "tbwebservices"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tbwebserviceroutes" ADD CONSTRAINT "tbwebserviceroutes_werbservoceobj_id_fkey" FOREIGN KEY ("werbservoceobj_id") REFERENCES "tbwebserviceobj"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tbtipobases" ADD CONSTRAINT "tbtipobases_status_id_fkey" FOREIGN KEY ("status_id") REFERENCES "tbstatus"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tbbases" ADD CONSTRAINT "tbbases_status_id_fkey" FOREIGN KEY ("status_id") REFERENCES "tbstatus"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tbrotas" ADD CONSTRAINT "tbrotas_status_id_fkey" FOREIGN KEY ("status_id") REFERENCES "tbstatus"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tbtabelas" ADD CONSTRAINT "tbtabelas_status_id_fkey" FOREIGN KEY ("status_id") REFERENCES "tbstatus"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tbtabelas" ADD CONSTRAINT "tbtabelas_base_id_fkey" FOREIGN KEY ("base_id") REFERENCES "tbbases"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tbcolunas" ADD CONSTRAINT "tbcolunas_status_id_fkey" FOREIGN KEY ("status_id") REFERENCES "tbstatus"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tbtabelaligacoes" ADD CONSTRAINT "tbtabelaligacoes_status_id_fkey" FOREIGN KEY ("status_id") REFERENCES "tbstatus"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tbtabelaligacoes" ADD CONSTRAINT "tbtabelaligacoes_tabela_origem_id_fkey" FOREIGN KEY ("tabela_origem_id") REFERENCES "tbtabelas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tbtabelaligacoes" ADD CONSTRAINT "tbtabelaligacoes_tabela_destino_id_fkey" FOREIGN KEY ("tabela_destino_id") REFERENCES "tbtabelas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
