/*
  Warnings:

  - You are about to drop the `WebServiceRoutes` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "WebServiceRoutes" DROP CONSTRAINT "WebServiceRoutes_webservice_id_fkey";

-- DropForeignKey
ALTER TABLE "WebServiceRoutes" DROP CONSTRAINT "WebServiceRoutes_werbservoceobj_id_fkey";

-- DropTable
DROP TABLE "WebServiceRoutes";

-- CreateTable
CREATE TABLE "tbwebserviceroutes" (
    "id" SERIAL NOT NULL,
    "webservice_id" INTEGER NOT NULL,
    "werbservoceobj_id" INTEGER NOT NULL,

    CONSTRAINT "tbwebserviceroutes_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "tbwebserviceroutes" ADD CONSTRAINT "tbwebserviceroutes_webservice_id_fkey" FOREIGN KEY ("webservice_id") REFERENCES "tbwebservices"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tbwebserviceroutes" ADD CONSTRAINT "tbwebserviceroutes_werbservoceobj_id_fkey" FOREIGN KEY ("werbservoceobj_id") REFERENCES "tbwebserviceobj"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
