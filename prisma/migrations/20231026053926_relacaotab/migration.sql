-- AddForeignKey
ALTER TABLE "Court" ADD CONSTRAINT "Court_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("companyId") ON DELETE RESTRICT ON UPDATE CASCADE;
