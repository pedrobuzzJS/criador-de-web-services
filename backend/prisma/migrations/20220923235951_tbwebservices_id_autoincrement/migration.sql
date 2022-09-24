-- AlterTable
CREATE SEQUENCE "tbwebservices_id_seq";
ALTER TABLE "tbwebservices" ALTER COLUMN "id" SET DEFAULT nextval('tbwebservices_id_seq');
ALTER SEQUENCE "tbwebservices_id_seq" OWNED BY "tbwebservices"."id";
