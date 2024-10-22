/*
  Warnings:

  - Added the required column `document_signed` to the `Adesao` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Adesao" ADD COLUMN     "document_signed" TEXT NOT NULL;
