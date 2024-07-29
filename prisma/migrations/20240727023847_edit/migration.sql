/*
  Warnings:

  - A unique constraint covering the columns `[code]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - The required column `code` was added to the `User` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `hashedPassword` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "address" TEXT,
ADD COLUMN     "birthday" TIMESTAMP(3),
ADD COLUMN     "cep" TEXT,
ADD COLUMN     "city" TEXT,
ADD COLUMN     "code" TEXT NOT NULL,
ADD COLUMN     "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "document" TEXT,
ADD COLUMN     "hashedPassword" TEXT NOT NULL,
ADD COLUMN     "neighboard" TEXT,
ADD COLUMN     "phone" TEXT,
ADD COLUMN     "socialName" TEXT,
ADD COLUMN     "state" TEXT,
ADD COLUMN     "updated" TIMESTAMP(3) NOT NULL;

-- CreateTable
CREATE TABLE "Contract" (
    "id" SERIAL NOT NULL,
    "number" TEXT NOT NULL,
    "version" TEXT NOT NULL,
    "keyRegistre" TEXT NOT NULL,
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Contract_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ContractUsers" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "contractId" INTEGER NOT NULL,

    CONSTRAINT "ContractUsers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Vehicle" (
    "id" SERIAL NOT NULL,
    "plate" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "chassis" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "model" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Vehicle_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Service" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "limitValue" INTEGER NOT NULL,
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Service_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ContractUsers_userId_contractId_key" ON "ContractUsers"("userId", "contractId");

-- CreateIndex
CREATE UNIQUE INDEX "User_code_key" ON "User"("code");

-- AddForeignKey
ALTER TABLE "ContractUsers" ADD CONSTRAINT "ContractUsers_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContractUsers" ADD CONSTRAINT "ContractUsers_contractId_fkey" FOREIGN KEY ("contractId") REFERENCES "Contract"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
