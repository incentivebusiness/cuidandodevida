-- CreateTable
CREATE TABLE "CompanyAdmin" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "hashedPassword" TEXT NOT NULL,
    "companyId" INTEGER NOT NULL,

    CONSTRAINT "CompanyAdmin_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CompanyAdmin_email_key" ON "CompanyAdmin"("email");

-- AddForeignKey
ALTER TABLE "CompanyAdmin" ADD CONSTRAINT "CompanyAdmin_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
