/*
  Warnings:

  - You are about to drop the `CompanyAdmin` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[email]` on the table `Company` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `Company` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hashedPassword` to the `Company` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "CompanyAdmin" DROP CONSTRAINT "CompanyAdmin_companyId_fkey";

-- DropIndex
DROP INDEX "Company_name_key";

-- AlterTable
ALTER TABLE "Company" ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "hashedPassword" TEXT NOT NULL;

-- DropTable
DROP TABLE "CompanyAdmin";

-- CreateIndex
CREATE UNIQUE INDEX "Company_email_key" ON "Company"("email");
