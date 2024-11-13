/*
  Warnings:

  - Changed the type of `actionType` on the `Adesao` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Adesao" DROP COLUMN "actionType",
ADD COLUMN     "actionType" INTEGER NOT NULL;
