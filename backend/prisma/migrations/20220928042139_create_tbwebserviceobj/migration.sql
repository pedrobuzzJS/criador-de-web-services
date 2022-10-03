-- CreateTable
CREATE TABLE "tbwebserviceobj" (
    "id" SERIAL NOT NULL,
    "obj" VARCHAR(2500) NOT NULL,
    "sql" VARCHAR(2500) NOT NULL,
    "webservice_id" INTEGER NOT NULL,

    CONSTRAINT "tbwebserviceobj_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "tbwebserviceobj" ADD CONSTRAINT "tbwebserviceobj_webservice_id_fkey" FOREIGN KEY ("webservice_id") REFERENCES "tbwebservices"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
