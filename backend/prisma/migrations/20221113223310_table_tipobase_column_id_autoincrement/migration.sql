-- AlterTable
CREATE SEQUENCE "tbtipobases_id_seq";
ALTER TABLE "tbtipobases" ALTER COLUMN "id" SET DEFAULT nextval('tbtipobases_id_seq');
ALTER SEQUENCE "tbtipobases_id_seq" OWNED BY "tbtipobases"."id";
