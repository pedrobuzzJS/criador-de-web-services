-- AlterTable
ALTER TABLE "tbwebserviceobj" ADD COLUMN     "status_id" INTEGER;

-- AddForeignKey
ALTER TABLE "tbwebserviceobj" ADD CONSTRAINT "tbwebserviceobj_status_id_fkey" FOREIGN KEY ("status_id") REFERENCES "tbstatus"("id") ON DELETE SET NULL ON UPDATE CASCADE;
