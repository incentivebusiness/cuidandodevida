-- CreateEnum
CREATE TYPE "PlanType" AS ENUM ('BASICO', 'MEDIO', 'SUPER');

-- CreateEnum
CREATE TYPE "ContratedPlan" AS ENUM ('BASIC', 'MEDIUM', 'PLUS');

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'EMPLOYEE', 'MANAGER', 'ADMIN');

-- CreateEnum
CREATE TYPE "PaymentStatus" AS ENUM ('PENDING', 'PAID', 'OVERDUE');

-- CreateEnum
CREATE TYPE "FileType" AS ENUM ('PAGAMENTO', 'ADESAO', 'CANCELAMENTO', 'ALTERACAO');

-- CreateTable
CREATE TABLE "Sequenciais" (
    "id" SERIAL NOT NULL,
    "ano" INTEGER NOT NULL,
    "sequencial" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "Sequenciais_pkey" PRIMARY KEY ("id")
);

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

-- CreateTable
CREATE TABLE "LuckyNumber" (
    "id" SERIAL NOT NULL,
    "number" TEXT NOT NULL,
    "series" TEXT,
    "loteClient" TEXT,
    "qnty" TEXT,

    CONSTRAINT "LuckyNumber_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "code" TEXT NOT NULL,
    "name" VARCHAR(80) NOT NULL,
    "cpf" VARCHAR(11) NOT NULL,
    "gender" VARCHAR(1) NOT NULL,
    "socialName" TEXT,
    "email" VARCHAR(255) NOT NULL,
    "hashedPassword" TEXT NOT NULL,
    "birthDate" DATE NOT NULL,
    "cel" VARCHAR(20) NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'USER',
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated" TIMESTAMP(3) NOT NULL,
    "document_signed" BOOLEAN NOT NULL DEFAULT false,
    "payment_completed" BOOLEAN NOT NULL DEFAULT false,
    "plan_selected" "PlanType",
    "contrated_plan" "ContratedPlan",
    "addressId" INTEGER,
    "luckyNumberId" INTEGER,
    "adesaoId" INTEGER,
    "generatedFilesId" INTEGER,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Payment" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "amount" DECIMAL(10,2) NOT NULL,
    "dueDate" TIMESTAMP(3) NOT NULL,
    "paymentDate" TIMESTAMP(3),
    "status" "PaymentStatus" NOT NULL DEFAULT 'PENDING',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Payment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cancellation" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "reason" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Cancellation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PlanChange" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "oldPlan" "PlanType" NOT NULL,
    "newPlan" "PlanType" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PlanChange_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Adesao" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "actionType" VARCHAR(1) NOT NULL,
    "cnpj" VARCHAR(14) NOT NULL,
    "productCode" VARCHAR(4) NOT NULL,
    "completeName" VARCHAR(255) NOT NULL,
    "birthDate" TIMESTAMP(3) NOT NULL,
    "cel" VARCHAR(20) NOT NULL,
    "gender" VARCHAR(1) NOT NULL,
    "email" VARCHAR(255) NOT NULL,

    CONSTRAINT "Adesao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GeneratedFiles" (
    "id" SERIAL NOT NULL,
    "fileType" "FileType" NOT NULL,
    "generationDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "sequenceNumber" INTEGER NOT NULL DEFAULT 1,
    "userId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "GeneratedFiles_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Sequenciais_ano_key" ON "Sequenciais"("ano");

-- CreateIndex
CREATE UNIQUE INDEX "LuckyNumber_number_series_key" ON "LuckyNumber"("number", "series");

-- CreateIndex
CREATE UNIQUE INDEX "User_code_key" ON "User"("code");

-- CreateIndex
CREATE UNIQUE INDEX "User_cpf_key" ON "User"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_addressId_key" ON "User"("addressId");

-- CreateIndex
CREATE UNIQUE INDEX "User_luckyNumberId_key" ON "User"("luckyNumberId");

-- CreateIndex
CREATE UNIQUE INDEX "User_adesaoId_key" ON "User"("adesaoId");

-- CreateIndex
CREATE UNIQUE INDEX "User_generatedFilesId_key" ON "User"("generatedFilesId");

-- CreateIndex
CREATE INDEX "User_cpf_idx" ON "User"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "Adesao_userId_key" ON "Adesao"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "GeneratedFiles_userId_key" ON "GeneratedFiles"("userId");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "Address"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_luckyNumberId_fkey" FOREIGN KEY ("luckyNumberId") REFERENCES "LuckyNumber"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cancellation" ADD CONSTRAINT "Cancellation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlanChange" ADD CONSTRAINT "PlanChange_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Adesao" ADD CONSTRAINT "Adesao_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GeneratedFiles" ADD CONSTRAINT "GeneratedFiles_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
