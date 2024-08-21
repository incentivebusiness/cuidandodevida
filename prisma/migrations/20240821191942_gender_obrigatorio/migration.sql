/*
  Warnings:

  - Made the column `gender` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "LuckyNumber" ALTER COLUMN "series" DROP NOT NULL,
ALTER COLUMN "loteClient" DROP NOT NULL,
ALTER COLUMN "qnty" DROP NOT NULL;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "gender" SET NOT NULL;
