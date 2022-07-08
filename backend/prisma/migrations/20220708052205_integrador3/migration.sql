/*
  Warnings:

  - A unique constraint covering the columns `[username]` on the table `tbusuarios` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `tbusuarios` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `username` to the `tbusuarios` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
CREATE SEQUENCE "tbusuarios_id_seq";
ALTER TABLE "tbusuarios" ADD COLUMN     "username" TEXT NOT NULL,
ALTER COLUMN "id" SET DEFAULT nextval('tbusuarios_id_seq'),
ALTER COLUMN "email_verified_at" DROP NOT NULL,
ALTER COLUMN "remember_token" DROP NOT NULL,
ALTER COLUMN "created_at" DROP NOT NULL,
ALTER COLUMN "updated_at" DROP NOT NULL;
ALTER SEQUENCE "tbusuarios_id_seq" OWNED BY "tbusuarios"."id";

-- CreateIndex
CREATE UNIQUE INDEX "tbusuarios_username_key" ON "tbusuarios"("username");

-- CreateIndex
CREATE UNIQUE INDEX "tbusuarios_email_key" ON "tbusuarios"("email");
