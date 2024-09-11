/*
  Warnings:

  - The `plan_selected` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "PlanType" AS ENUM ('BASICO', 'MEDIO', 'PLUS');

-- AlterTable
ALTER TABLE "User" DROP COLUMN "plan_selected",
ADD COLUMN     "plan_selected" "PlanType";
