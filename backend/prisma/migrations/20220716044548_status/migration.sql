/*
  Warnings:

  - You are about to drop the column `status` on the `tbbases` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `tbcolunas` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `tbtabelas` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `tbtipobases` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `tbtipowebservices` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `tbwebservices` table. All the data in the column will be lost.
  - Added the required column `status_id` to the `tbrotas` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "tbbases" DROP COLUMN "status",
ADD COLUMN     "status_id" INTEGER;

-- AlterTable
ALTER TABLE "tbcolunas" DROP COLUMN "status",
ADD COLUMN     "status_id" INTEGER;

-- AlterTable
ALTER TABLE "tbrotas" ADD COLUMN     "status_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "tbtabelaligacoes" ADD COLUMN     "status_id" INTEGER;

-- AlterTable
ALTER TABLE "tbtabelas" DROP COLUMN "status",
ADD COLUMN     "status_id" INTEGER;

-- AlterTable
ALTER TABLE "tbtipobases" DROP COLUMN "status",
ADD COLUMN     "status_id" INTEGER;

-- AlterTable
ALTER TABLE "tbtipowebservices" DROP COLUMN "status",
ADD COLUMN     "status_id" INTEGER;

-- AlterTable
ALTER TABLE "tbwebservices" DROP COLUMN "status",
ADD COLUMN     "status_id" INTEGER;

-- AddForeignKey
ALTER TABLE "tbtipowebservices" ADD CONSTRAINT "tbtipowebservices_status_id_fkey" FOREIGN KEY ("status_id") REFERENCES "tbstatus"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tbwebservices" ADD CONSTRAINT "tbwebservices_status_id_fkey" FOREIGN KEY ("status_id") REFERENCES "tbstatus"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tbtipobases" ADD CONSTRAINT "tbtipobases_status_id_fkey" FOREIGN KEY ("status_id") REFERENCES "tbstatus"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tbbases" ADD CONSTRAINT "tbbases_status_id_fkey" FOREIGN KEY ("status_id") REFERENCES "tbstatus"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tbrotas" ADD CONSTRAINT "tbrotas_status_id_fkey" FOREIGN KEY ("status_id") REFERENCES "tbstatus"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tbtabelas" ADD CONSTRAINT "tbtabelas_status_id_fkey" FOREIGN KEY ("status_id") REFERENCES "tbstatus"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tbcolunas" ADD CONSTRAINT "tbcolunas_status_id_fkey" FOREIGN KEY ("status_id") REFERENCES "tbstatus"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tbtabelaligacoes" ADD CONSTRAINT "tbtabelaligacoes_status_id_fkey" FOREIGN KEY ("status_id") REFERENCES "tbstatus"("id") ON DELETE SET NULL ON UPDATE CASCADE;
