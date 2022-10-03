-- CreateTable
CREATE TABLE "Rotina" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "descricao" VARCHAR(500) NOT NULL,
    "acao" VARCHAR(500) NOT NULL,
    "metodo" VARCHAR(8) NOT NULL,

    CONSTRAINT "Rotina_pkey" PRIMARY KEY ("id")
);
