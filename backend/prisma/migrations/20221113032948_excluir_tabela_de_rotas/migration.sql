/*
  Warnings:

  - You are about to drop the `tbrotas` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "tbrotas" DROP CONSTRAINT "tbrotas_status_id_fkey";

-- DropTable
DROP TABLE "tbrotas";
