-- AddForeignKey
ALTER TABLE "tbmenus" ADD CONSTRAINT "tbmenus_pai_id_fkey" FOREIGN KEY ("pai_id") REFERENCES "tbmenus"("id") ON DELETE SET NULL ON UPDATE CASCADE;
