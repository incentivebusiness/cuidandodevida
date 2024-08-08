/*
  Warnings:

  - You are about to drop the `AnimalEstimacao` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Contrato` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Dependente` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Endereco` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `RacaEspecie` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Registro` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Servico` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ServicoContrato` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TipoDependente` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UsuarioAssistencia` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "AnimalEstimacao" DROP CONSTRAINT "AnimalEstimacao_racaId_fkey";

-- DropForeignKey
ALTER TABLE "AnimalEstimacao" DROP CONSTRAINT "AnimalEstimacao_usuarioId_fkey";

-- DropForeignKey
ALTER TABLE "Contrato" DROP CONSTRAINT "Contrato_usuarioId_fkey";

-- DropForeignKey
ALTER TABLE "Dependente" DROP CONSTRAINT "Dependente_tipoId_fkey";

-- DropForeignKey
ALTER TABLE "Dependente" DROP CONSTRAINT "Dependente_usuarioId_fkey";

-- DropForeignKey
ALTER TABLE "Endereco" DROP CONSTRAINT "Endereco_usuarioId_fkey";

-- DropForeignKey
ALTER TABLE "Registro" DROP CONSTRAINT "Registro_contractId_fkey";

-- DropForeignKey
ALTER TABLE "Registro" DROP CONSTRAINT "Registro_serviceId_fkey";

-- DropForeignKey
ALTER TABLE "ServicoContrato" DROP CONSTRAINT "ServicoContrato_contratoId_fkey";

-- DropForeignKey
ALTER TABLE "ServicoContrato" DROP CONSTRAINT "ServicoContrato_servicoId_fkey";

-- DropForeignKey
ALTER TABLE "UsuarioAssistencia" DROP CONSTRAINT "UsuarioAssistencia_userId_fkey";

-- DropTable
DROP TABLE "AnimalEstimacao";

-- DropTable
DROP TABLE "Contrato";

-- DropTable
DROP TABLE "Dependente";

-- DropTable
DROP TABLE "Endereco";

-- DropTable
DROP TABLE "RacaEspecie";

-- DropTable
DROP TABLE "Registro";

-- DropTable
DROP TABLE "Servico";

-- DropTable
DROP TABLE "ServicoContrato";

-- DropTable
DROP TABLE "TipoDependente";

-- DropTable
DROP TABLE "UsuarioAssistencia";

-- CreateTable
CREATE TABLE "Record" (
    "id" SERIAL NOT NULL,
    "contractId" INTEGER NOT NULL,
    "serviceId" INTEGER NOT NULL,
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Record_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserAssistance" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(80) NOT NULL,
    "cpf" VARCHAR(11),
    "cnpj" VARCHAR(14),
    "birthDate" DATE NOT NULL,
    "gender" VARCHAR(1),
    "email" VARCHAR(60),
    "phone1" VARCHAR(20) NOT NULL,
    "phone2" VARCHAR(20),
    "userId" INTEGER,
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserAssistance_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Address" (
    "id" SERIAL NOT NULL,
    "address" VARCHAR(80) NOT NULL,
    "state" VARCHAR(2) NOT NULL,
    "city" VARCHAR(35) NOT NULL,
    "neighborhood" VARCHAR(35) NOT NULL,
    "zipCode" VARCHAR(10) NOT NULL,
    "phone" VARCHAR(20) NOT NULL,
    "userId" INTEGER NOT NULL,
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Address_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pet" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(25),
    "birthDate" DATE,
    "breedId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Pet_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Breed" (
    "id" SERIAL NOT NULL,
    "description" VARCHAR(25),
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Breed_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Dependent" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(80) NOT NULL,
    "userId" INTEGER NOT NULL,
    "typeId" INTEGER NOT NULL,
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Dependent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DependentType" (
    "id" SERIAL NOT NULL,
    "description" VARCHAR(80) NOT NULL,
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DependentType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Contract" (
    "id" SERIAL NOT NULL,
    "number" VARCHAR(18) NOT NULL,
    "version" INTEGER NOT NULL,
    "key" VARCHAR(30) NOT NULL,
    "subKey" VARCHAR(15) NOT NULL,
    "movementType" VARCHAR(1) NOT NULL,
    "startDate" DATE NOT NULL,
    "endDate" DATE NOT NULL,
    "userId" INTEGER NOT NULL,
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Contract_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ServiceContract" (
    "id" SERIAL NOT NULL,
    "serviceId" INTEGER NOT NULL,
    "contractId" INTEGER NOT NULL,
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ServiceContract_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Service" (
    "id" SERIAL NOT NULL,
    "description" VARCHAR(100) NOT NULL,
    "limitValue" INTEGER NOT NULL,
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Service_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Record" ADD CONSTRAINT "Record_contractId_fkey" FOREIGN KEY ("contractId") REFERENCES "Contract"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Record" ADD CONSTRAINT "Record_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "ServiceContract"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserAssistance" ADD CONSTRAINT "UserAssistance_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_userId_fkey" FOREIGN KEY ("userId") REFERENCES "UserAssistance"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pet" ADD CONSTRAINT "Pet_breedId_fkey" FOREIGN KEY ("breedId") REFERENCES "Breed"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pet" ADD CONSTRAINT "Pet_userId_fkey" FOREIGN KEY ("userId") REFERENCES "UserAssistance"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Dependent" ADD CONSTRAINT "Dependent_userId_fkey" FOREIGN KEY ("userId") REFERENCES "UserAssistance"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Dependent" ADD CONSTRAINT "Dependent_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "DependentType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contract" ADD CONSTRAINT "Contract_userId_fkey" FOREIGN KEY ("userId") REFERENCES "UserAssistance"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ServiceContract" ADD CONSTRAINT "ServiceContract_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Service"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ServiceContract" ADD CONSTRAINT "ServiceContract_contractId_fkey" FOREIGN KEY ("contractId") REFERENCES "Contract"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
