/*
  Warnings:

  - A unique constraint covering the columns `[number,series]` on the table `LuckyNumber` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[luckyNumberId]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "luckyNumberId" INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "LuckyNumber_number_series_key" ON "LuckyNumber"("number", "series");

-- CreateIndex
CREATE UNIQUE INDEX "User_luckyNumberId_key" ON "User"("luckyNumberId");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_luckyNumberId_fkey" FOREIGN KEY ("luckyNumberId") REFERENCES "LuckyNumber"("id") ON DELETE SET NULL ON UPDATE CASCADE;
