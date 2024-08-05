/*
  Warnings:

  - You are about to drop the column `address` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `birthday` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `cep` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `city` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `document` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `neighboard` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `state` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Contract` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ContractUsers` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Service` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Vehicle` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ContractUsers" DROP CONSTRAINT "ContractUsers_contractId_fkey";

-- DropForeignKey
ALTER TABLE "ContractUsers" DROP CONSTRAINT "ContractUsers_userId_fkey";

-- DropIndex
DROP INDEX "User_document_key";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "address",
DROP COLUMN "birthday",
DROP COLUMN "cep",
DROP COLUMN "city",
DROP COLUMN "document",
DROP COLUMN "neighboard",
DROP COLUMN "phone",
DROP COLUMN "state";

-- DropTable
DROP TABLE "Contract";

-- DropTable
DROP TABLE "ContractUsers";

-- DropTable
DROP TABLE "Service";

-- DropTable
DROP TABLE "Vehicle";

-- CreateTable
CREATE TABLE "Registro" (
    "id" SERIAL NOT NULL,
    "contractId" INTEGER NOT NULL,
    "serviceId" INTEGER NOT NULL,
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Registro_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UsuarioAssistencia" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(80) NOT NULL,
    "cpf" VARCHAR(11),
    "cnpj" VARCHAR(14),
    "dataNascimento" DATE NOT NULL,
    "genero" VARCHAR(1),
    "email" VARCHAR(60),
    "telefone1" VARCHAR(20) NOT NULL,
    "telefone2" VARCHAR(20),
    "telefone3" VARCHAR(20),
    "telefone4" VARCHAR(20),
    "userId" INTEGER,
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UsuarioAssistencia_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Endereco" (
    "id" SERIAL NOT NULL,
    "endereco" VARCHAR(80) NOT NULL,
    "uf" VARCHAR(2) NOT NULL,
    "cidade" VARCHAR(35) NOT NULL,
    "bairro" VARCHAR(35) NOT NULL,
    "cep" VARCHAR(10) NOT NULL,
    "telefone" VARCHAR(20) NOT NULL,
    "usuarioId" INTEGER NOT NULL,
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Endereco_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AnimalEstimacao" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(25),
    "dataNasc" DATE,
    "racaId" INTEGER NOT NULL,
    "usuarioId" INTEGER NOT NULL,
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AnimalEstimacao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RacaEspecie" (
    "id" SERIAL NOT NULL,
    "descricao" VARCHAR(25),
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RacaEspecie_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Veiculo" (
    "id" SERIAL NOT NULL,
    "placa" VARCHAR(10) NOT NULL,
    "chassi" VARCHAR(20) NOT NULL,
    "cor" VARCHAR(10),
    "anoFabricacao" INTEGER NOT NULL,
    "modeloId" INTEGER NOT NULL,
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Veiculo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ModeloVeiculo" (
    "id" SERIAL NOT NULL,
    "descricao" VARCHAR(40) NOT NULL,
    "marcaId" INTEGER NOT NULL,
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ModeloVeiculo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MarcaVeiculo" (
    "id" SERIAL NOT NULL,
    "descricao" VARCHAR(40) NOT NULL,
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MarcaVeiculo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Dependente" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(80) NOT NULL,
    "usuarioId" INTEGER NOT NULL,
    "tipoId" INTEGER NOT NULL,
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Dependente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TipoDependente" (
    "id" SERIAL NOT NULL,
    "descricao" VARCHAR(80) NOT NULL,
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TipoDependente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Contrato" (
    "id" SERIAL NOT NULL,
    "numero" VARCHAR(18) NOT NULL,
    "versao" INTEGER NOT NULL,
    "chave" VARCHAR(30) NOT NULL,
    "subChave" VARCHAR(15) NOT NULL,
    "tipoMovimento" VARCHAR(1) NOT NULL,
    "inicioVigencia" DATE NOT NULL,
    "fimVigencia" DATE NOT NULL,
    "usuarioId" INTEGER NOT NULL,
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Contrato_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ServicoContrato" (
    "id" SERIAL NOT NULL,
    "servicoId" INTEGER NOT NULL,
    "contratoId" INTEGER NOT NULL,
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ServicoContrato_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Servico" (
    "id" SERIAL NOT NULL,
    "descricao" VARCHAR(100) NOT NULL,
    "limitValue" INTEGER NOT NULL,
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Servico_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Registro" ADD CONSTRAINT "Registro_contractId_fkey" FOREIGN KEY ("contractId") REFERENCES "Contrato"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Registro" ADD CONSTRAINT "Registro_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "ServicoContrato"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsuarioAssistencia" ADD CONSTRAINT "UsuarioAssistencia_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Endereco" ADD CONSTRAINT "Endereco_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "UsuarioAssistencia"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AnimalEstimacao" ADD CONSTRAINT "AnimalEstimacao_racaId_fkey" FOREIGN KEY ("racaId") REFERENCES "RacaEspecie"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AnimalEstimacao" ADD CONSTRAINT "AnimalEstimacao_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "UsuarioAssistencia"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Veiculo" ADD CONSTRAINT "Veiculo_modeloId_fkey" FOREIGN KEY ("modeloId") REFERENCES "ModeloVeiculo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ModeloVeiculo" ADD CONSTRAINT "ModeloVeiculo_marcaId_fkey" FOREIGN KEY ("marcaId") REFERENCES "MarcaVeiculo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Dependente" ADD CONSTRAINT "Dependente_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "UsuarioAssistencia"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Dependente" ADD CONSTRAINT "Dependente_tipoId_fkey" FOREIGN KEY ("tipoId") REFERENCES "TipoDependente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contrato" ADD CONSTRAINT "Contrato_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "UsuarioAssistencia"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ServicoContrato" ADD CONSTRAINT "ServicoContrato_servicoId_fkey" FOREIGN KEY ("servicoId") REFERENCES "Servico"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ServicoContrato" ADD CONSTRAINT "ServicoContrato_contratoId_fkey" FOREIGN KEY ("contratoId") REFERENCES "Contrato"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
