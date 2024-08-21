/*
  Warnings:

  - A unique constraint covering the columns `[addressId]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "addressId" INTEGER;

-- CreateTable
CREATE TABLE "Address" (
    "id" SERIAL NOT NULL,
    "street" VARCHAR(255) NOT NULL,
    "number" VARCHAR(20) NOT NULL,
    "complement" VARCHAR(255),
    "neighborhood" VARCHAR(255) NOT NULL,
    "city" VARCHAR(255) NOT NULL,
    "state" VARCHAR(2) NOT NULL,
    "zipCode" VARCHAR(8) NOT NULL,

    CONSTRAINT "Address_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_addressId_key" ON "User"("addressId");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "Address"("id") ON DELETE SET NULL ON UPDATE CASCADE;
