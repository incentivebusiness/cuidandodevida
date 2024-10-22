-- AlterTable
ALTER TABLE "Adesao" ADD COLUMN     "payment_completed" BOOLEAN DEFAULT false,
ALTER COLUMN "document_signed" SET DEFAULT false;
