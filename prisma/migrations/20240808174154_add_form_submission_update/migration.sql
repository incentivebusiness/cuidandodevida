/*
  Warnings:

  - You are about to drop the column `telefone3` on the `UsuarioAssistencia` table. All the data in the column will be lost.
  - You are about to drop the column `telefone4` on the `UsuarioAssistencia` table. All the data in the column will be lost.
  - You are about to drop the `MarcaVeiculo` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ModeloVeiculo` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Veiculo` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ModeloVeiculo" DROP CONSTRAINT "ModeloVeiculo_marcaId_fkey";

-- DropForeignKey
ALTER TABLE "Veiculo" DROP CONSTRAINT "Veiculo_modeloId_fkey";

-- AlterTable
ALTER TABLE "UsuarioAssistencia" DROP COLUMN "telefone3",
DROP COLUMN "telefone4";

-- DropTable
DROP TABLE "MarcaVeiculo";

-- DropTable
DROP TABLE "ModeloVeiculo";

-- DropTable
DROP TABLE "Veiculo";
