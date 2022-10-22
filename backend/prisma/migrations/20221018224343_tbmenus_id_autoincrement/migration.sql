-- AlterTable
CREATE SEQUENCE "tbmenus_id_seq";
ALTER TABLE "tbmenus" ALTER COLUMN "id" SET DEFAULT nextval('tbmenus_id_seq');
ALTER SEQUENCE "tbmenus_id_seq" OWNED BY "tbmenus"."id";
