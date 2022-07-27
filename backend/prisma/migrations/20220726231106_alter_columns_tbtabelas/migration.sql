-- DropForeignKey
ALTER TABLE "tbtabelas" DROP CONSTRAINT "tbtabelas_base_id_fkey";

-- AlterTable
CREATE SEQUENCE "tbtabelas_id_seq";
ALTER TABLE "tbtabelas" ALTER COLUMN "id" SET DEFAULT nextval('tbtabelas_id_seq'),
ALTER COLUMN "base_id" DROP NOT NULL,
ALTER COLUMN "permissao" DROP NOT NULL;
ALTER SEQUENCE "tbtabelas_id_seq" OWNED BY "tbtabelas"."id";

-- AddForeignKey
ALTER TABLE "tbtabelas" ADD CONSTRAINT "tbtabelas_base_id_fkey" FOREIGN KEY ("base_id") REFERENCES "tbbases"("id") ON DELETE SET NULL ON UPDATE CASCADE;
