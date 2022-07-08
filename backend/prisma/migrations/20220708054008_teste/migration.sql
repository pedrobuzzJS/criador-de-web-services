/*
  Warnings:

  - You are about to drop the column `email_verified_at` on the `tbusuarios` table. All the data in the column will be lost.
  - The `created_at` column on the `tbusuarios` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "tbusuarios" DROP COLUMN "email_verified_at",
ADD COLUMN     "email_verified" BOOLEAN DEFAULT false,
DROP COLUMN "created_at",
ADD COLUMN     "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP;
