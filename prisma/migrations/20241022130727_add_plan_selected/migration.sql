/*
  Warnings:

  - The `document_signed` column on the `Adesao` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Adesao" DROP COLUMN "document_signed",
ADD COLUMN     "document_signed" BOOLEAN;
