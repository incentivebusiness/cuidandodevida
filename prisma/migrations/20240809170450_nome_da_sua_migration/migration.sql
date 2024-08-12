/*
  Warnings:

  - You are about to alter the column `name` on the `User` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(80)`.
  - You are about to drop the column `birthDate` on the `UserAssistance` table. All the data in the column will be lost.
  - You are about to drop the column `cnpj` on the `UserAssistance` table. All the data in the column will be lost.
  - You are about to drop the column `cpf` on the `UserAssistance` table. All the data in the column will be lost.
  - You are about to drop the column `created` on the `UserAssistance` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `UserAssistance` table. All the data in the column will be lost.
  - You are about to drop the column `gender` on the `UserAssistance` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `UserAssistance` table. All the data in the column will be lost.
  - You are about to drop the column `phone1` on the `UserAssistance` table. All the data in the column will be lost.
  - You are about to drop the column `phone2` on the `UserAssistance` table. All the data in the column will be lost.
  - You are about to drop the column `updated` on the `UserAssistance` table. All the data in the column will be lost.
  - You are about to drop the `Address` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Breed` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Contract` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Dependent` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `DependentType` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Pet` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Record` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Service` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ServiceContract` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `birthDate` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cel` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `actionType` to the `UserAssistance` table without a default value. This is not possible if the table is not empty.
  - Added the required column `product` to the `UserAssistance` table without a default value. This is not possible if the table is not empty.
  - Made the column `userId` on table `UserAssistance` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Address" DROP CONSTRAINT "Address_userId_fkey";

-- DropForeignKey
ALTER TABLE "Contract" DROP CONSTRAINT "Contract_userId_fkey";

-- DropForeignKey
ALTER TABLE "Dependent" DROP CONSTRAINT "Dependent_typeId_fkey";

-- DropForeignKey
ALTER TABLE "Dependent" DROP CONSTRAINT "Dependent_userId_fkey";

-- DropForeignKey
ALTER TABLE "Pet" DROP CONSTRAINT "Pet_breedId_fkey";

-- DropForeignKey
ALTER TABLE "Pet" DROP CONSTRAINT "Pet_userId_fkey";

-- DropForeignKey
ALTER TABLE "Record" DROP CONSTRAINT "Record_contractId_fkey";

-- DropForeignKey
ALTER TABLE "Record" DROP CONSTRAINT "Record_serviceId_fkey";

-- DropForeignKey
ALTER TABLE "ServiceContract" DROP CONSTRAINT "ServiceContract_contractId_fkey";

-- DropForeignKey
ALTER TABLE "ServiceContract" DROP CONSTRAINT "ServiceContract_serviceId_fkey";

-- DropForeignKey
ALTER TABLE "UserAssistance" DROP CONSTRAINT "UserAssistance_userId_fkey";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "birthDate" DATE NOT NULL,
ADD COLUMN     "cel" VARCHAR(20) NOT NULL,
ADD COLUMN     "cpf" VARCHAR(11),
ADD COLUMN     "gender" VARCHAR(1),
ALTER COLUMN "name" SET DATA TYPE VARCHAR(80);

-- AlterTable
ALTER TABLE "UserAssistance" DROP COLUMN "birthDate",
DROP COLUMN "cnpj",
DROP COLUMN "cpf",
DROP COLUMN "created",
DROP COLUMN "email",
DROP COLUMN "gender",
DROP COLUMN "name",
DROP COLUMN "phone1",
DROP COLUMN "phone2",
DROP COLUMN "updated",
ADD COLUMN     "actionType" INTEGER NOT NULL,
ADD COLUMN     "product" INTEGER NOT NULL,
ALTER COLUMN "userId" SET NOT NULL;

-- DropTable
DROP TABLE "Address";

-- DropTable
DROP TABLE "Breed";

-- DropTable
DROP TABLE "Contract";

-- DropTable
DROP TABLE "Dependent";

-- DropTable
DROP TABLE "DependentType";

-- DropTable
DROP TABLE "Pet";

-- DropTable
DROP TABLE "Record";

-- DropTable
DROP TABLE "Service";

-- DropTable
DROP TABLE "ServiceContract";

-- CreateIndex
CREATE INDEX "UserAssistance_userId_idx" ON "UserAssistance"("userId");

-- AddForeignKey
ALTER TABLE "UserAssistance" ADD CONSTRAINT "UserAssistance_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
