/*
  Warnings:

  - Added the required column `route` to the `tbwebserviceroutes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "tbwebserviceroutes" ADD COLUMN     "route" VARCHAR(500) NOT NULL;
