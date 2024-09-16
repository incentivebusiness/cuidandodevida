-- CreateEnum
CREATE TYPE "PlanType" AS ENUM ('BASICO', 'MEDIO', 'PLUS');

-- CreateEnum
CREATE TYPE "ContratedPlan" AS ENUM ('BASIC', 'MEDIUM', 'PLUS');

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'EMPLOYEE', 'MANAGER', 'ADMIN');

-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('EMPLOYEE', 'MANAGER');

-- CreateTable
CREATE TABLE "Company" (
    "id" SERIAL NOT NULL,
    "cnpj" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Company_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PreRegister" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "role" "UserRole" NOT NULL,
    "registeredAt" TIMESTAMP(3),
    "companyId" INTEGER NOT NULL,
    "completed" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "PreRegister_pkey" PRIMARY KEY ("id")
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
    "companyId" INTEGER,
    "addressId" INTEGER,
    "luckyNumberId" INTEGER,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
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

-- CreateIndex
CREATE UNIQUE INDEX "Company_cnpj_key" ON "Company"("cnpj");

-- CreateIndex
CREATE UNIQUE INDEX "Company_name_key" ON "Company"("name");

-- CreateIndex
CREATE UNIQUE INDEX "PreRegister_cpf_key" ON "PreRegister"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "PreRegister_email_key" ON "PreRegister"("email");

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
CREATE UNIQUE INDEX "LuckyNumber_number_series_key" ON "LuckyNumber"("number", "series");

-- AddForeignKey
ALTER TABLE "PreRegister" ADD CONSTRAINT "PreRegister_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "Address"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_luckyNumberId_fkey" FOREIGN KEY ("luckyNumberId") REFERENCES "LuckyNumber"("id") ON DELETE SET NULL ON UPDATE CASCADE;
