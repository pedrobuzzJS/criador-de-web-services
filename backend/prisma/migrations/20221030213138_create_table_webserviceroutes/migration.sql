-- CreateTable
CREATE TABLE "WebServiceRoutes" (
    "id" SERIAL NOT NULL,
    "webservice_id" INTEGER NOT NULL,
    "werbservoceobj_id" INTEGER NOT NULL,

    CONSTRAINT "WebServiceRoutes_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "WebServiceRoutes" ADD CONSTRAINT "WebServiceRoutes_webservice_id_fkey" FOREIGN KEY ("webservice_id") REFERENCES "tbwebservices"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WebServiceRoutes" ADD CONSTRAINT "WebServiceRoutes_werbservoceobj_id_fkey" FOREIGN KEY ("werbservoceobj_id") REFERENCES "tbwebserviceobj"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
