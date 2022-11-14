/*
  Warnings:

  - You are about to drop the column `consumir` on the `tbwebservices` table. All the data in the column will be lost.
  - You are about to drop the column `prover` on the `tbwebservices` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "tbwebservices" DROP COLUMN "consumir",
DROP COLUMN "prover";
