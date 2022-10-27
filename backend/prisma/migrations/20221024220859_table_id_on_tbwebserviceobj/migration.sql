/*
  Warnings:

  - Added the required column `table_id` to the `tbwebserviceobj` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "tbwebserviceobj" ADD COLUMN     "table_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "tbwebserviceobj" ADD CONSTRAINT "tbwebserviceobj_table_id_fkey" FOREIGN KEY ("table_id") REFERENCES "tbtabelas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
