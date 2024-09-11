-- AlterTable
ALTER TABLE "User" ADD COLUMN     "document_signed" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "payment_completed" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "plan_selected" TEXT;
