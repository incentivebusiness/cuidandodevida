/*
  Warnings:

  - You are about to drop the column `birthDate` on the `Adesao` table. All the data in the column will be lost.
  - You are about to drop the column `cel` on the `Adesao` table. All the data in the column will be lost.
  - You are about to drop the column `cnpj` on the `Adesao` table. All the data in the column will be lost.
  - You are about to drop the column `completeName` on the `Adesao` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `Adesao` table. All the data in the column will be lost.
  - You are about to drop the column `gender` on the `Adesao` table. All the data in the column will be lost.
  - Added the required column `contrated_plan` to the `Adesao` table without a default value. This is not possible if the table is not empty.
  - Added the required column `plan_selected` to the `Adesao` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Adesao" DROP COLUMN "birthDate",
DROP COLUMN "cel",
DROP COLUMN "cnpj",
DROP COLUMN "completeName",
DROP COLUMN "email",
DROP COLUMN "gender",
ADD COLUMN     "contrated_plan" TEXT NOT NULL,
ADD COLUMN     "plan_selected" TEXT NOT NULL;
